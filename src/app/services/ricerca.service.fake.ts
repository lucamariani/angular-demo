import { Injectable } from '@angular/core';
import { InputRicerca } from '../models/input-ricerca';
import { IRicercaService } from './IRicercaService';
import { Persona, Sesso } from '../models/persona';
import * as faker from 'faker';
import { StatisticheRicerca } from '../models/statistiche-ricerca';
import { OutputRicerca } from '../models/output-ricerca';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RicercaServiceFake implements IRicercaService {  
  private inputRicerca: InputRicerca = new InputRicerca();
  private persone: Persona[] = [];
  private statistiche$: Subject<StatisticheRicerca> = new Subject<StatisticheRicerca>();

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
   }

  setNewPage(newPage: number): void {
    console.log('Fake service | set new page ' + newPage);    
    this.inputRicerca = this.inputRicerca.changePage(newPage);
    this.doFilter();
  }  

  setNewKey(newKey: string): void {
    console.log('Fake service | set new key ' + newKey);
    this.inputRicerca = this.inputRicerca.changeKey(newKey);
    this.doFilter();
  } 

  private doFilter(): void {
    const ir = this.inputRicerca;
    const normalizedKey = ir.key.toLowerCase().trim();
    const startIdx: number = (ir.page -1) * ir.pageLen;
    const endIdx: number = startIdx + ir.pageLen;

    console.log('page: ', ir.page)
    console.log('indexes: ', startIdx, endIdx)

    let personeFiltrate = this.persone.filter( (p) => 
        !ir.key.trim() ||
        p.nome.toLowerCase().startsWith(normalizedKey) ||
        p.cognome.toLowerCase().startsWith(normalizedKey) ||
        p.eta.toString().trim()  == normalizedKey
      );

      let personeFiltrateSlice = personeFiltrate.slice(startIdx, endIdx);      

      console.log('Filtrate: ', personeFiltrate)

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
        personeFiltrateSlice.length,
        ir.page,
        ir.pageLen,
        statistiche
      );

      // notifica a tutti i subscribers che c'e' un nuovo output
      this.statistiche$.next(statistiche);
  }  

  onStatistiche(): Observable<StatisticheRicerca> {
    return this.statistiche$;
  }

}

