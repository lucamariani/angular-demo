import { Injectable } from '@angular/core';
import { InputRicerca } from '../models/input-ricerca';
import { IRicercaService } from './IRicercaService';
import { Persona, Sesso } from '../models/persona';
import * as faker from 'faker';
import { StatisticheRicerca } from '../models/statistiche-ricerca';
import { OutputRicerca } from '../models/output-ricerca';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RicercaServiceFake implements IRicercaService {
  private onSetNewKey$: Subject<string> = new Subject<string>();
  private inputRicerca: InputRicerca = new InputRicerca();
  private persone: Persona[] = [];
  // BehaviorSubject differs from Subjetc only because returns the value once a component subscribes 
  // ( Subject returns the value only when next is called )
  private statistiche$: Subject<StatisticheRicerca> = new BehaviorSubject<StatisticheRicerca>(null);
  private filtro$: Subject<Persona[]> = new Subject<Persona[]>();
  private filterChange$: Subject<OutputRicerca> = new Subject<OutputRicerca>();

  constructor() {    
    for(var i=0; i < 10000; i++) {
      let gender: number = faker.random.number({max:2});
      let fakePerson = new Persona(
        faker.name.firstName(gender),
        faker.name.lastName(gender),
        faker.random.number({min:18, max: 80}),
        gender
      ); 
      this.persone.push(fakePerson);      
    }
    console.log('Persone array initialized...', this.persone);
    setTimeout(() => this.doFilter(), 2000);
    // in order to avoid too much firing searchs 
    this.onSetNewKey$.pipe(
      // wait msec
      debounceTime(500),
      // do not fire if same input value
      distinctUntilChanged()
    )
    .subscribe(key => this._setNewKey(key));
   }

  setNewPage(newPage: number): void {
    console.log('Fake service | set new page ' + newPage);    
    this.inputRicerca = this.inputRicerca.changePage(newPage);
    this.doFilter();
  }  

  public setNewKey(newKey: string): void {
    this.onSetNewKey$.next(newKey);
  }

  private _setNewKey(newKey: string): void {
    console.log('Fake service | set new key ' + newKey);
    this.inputRicerca = this.inputRicerca.changeKey(newKey);
    this.doFilter();
  } 

  private doFilter(): void {
    const ir = this.inputRicerca;
    const normalizedKey = ir.key.toLowerCase().trim();
    const startIdx: number = (ir.page -1) * ir.pageLen;
    const endIdx: number = startIdx + ir.pageLen;

    // console.log('page: ', ir.page)
    // console.log('indexes: ', startIdx, endIdx)

    let personeFiltrate = this.persone.filter( (p) => 
        !ir.key.trim() ||
        p.nome.toLowerCase().startsWith(normalizedKey) ||
        p.cognome.toLowerCase().startsWith(normalizedKey) ||
        p.eta.toString().trim()  == normalizedKey
      );

      let personeFiltrateSlice = personeFiltrate.slice(startIdx, endIdx);      

      // console.log('Filtrate: ', personeFiltrate)

      let statistiche = new StatisticheRicerca(
        this.persone.length,
        this.persone.reduce( (a,p) => a += p.sesso === Sesso.Maschio ? 1 : 0, 0),
        this.persone.reduce( (a,p) => a += p.sesso === Sesso.Femmina ? 1 : 0, 0),
        this.persone.reduce( (a,p) => a += p.sesso === Sesso.Altro ? 1 : 0, 0),
        personeFiltrate.length,
        personeFiltrate.reduce( (a,p) => a += p.sesso === Sesso.Maschio ? 1 : 0, 0),
        personeFiltrate.reduce( (a,p) => a += p.sesso === Sesso.Femmina ? 1 : 0, 0),
        personeFiltrate.reduce( (a,p) => a += p.sesso === Sesso.Altro ? 1 : 0, 0),
      );

      let outputRicerca = new OutputRicerca(
        personeFiltrateSlice,
        personeFiltrate.length,
        ir.page,
        ir.pageLen,
        statistiche
      );

      // notifica a tutti i subscribers che c'e' un nuovo output
      this.statistiche$.next(statistiche);
      this.filtro$.next(outputRicerca.persone);
      this.filterChange$.next(outputRicerca);
  }  

  onStatistiche(): Observable<StatisticheRicerca> {
    return this.statistiche$;
  }

  onFiltro(): Observable<Persona[]> {
    return this.filtro$;
  }  

  onFilterChange(): Observable<OutputRicerca> {
    return this.filterChange$;
  }
}

