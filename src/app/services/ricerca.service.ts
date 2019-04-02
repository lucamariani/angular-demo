import { Injectable } from '@angular/core';
import { InputRicerca } from '../models/input-ricerca';
import { IRicercaService } from './IRicercaService';
import { StatisticheRicerca } from '../models/statistiche-ricerca';
import { Observable, Subject } from 'rxjs';
import { Persona } from '../models/persona';
import { OutputRicerca } from '../models/output-ricerca';

@Injectable({
  providedIn: 'root'
})
export class RicercaService implements IRicercaService {
  private inputRicerca: InputRicerca = new InputRicerca();
  private statistiche$: Observable<StatisticheRicerca> = new Subject<StatisticheRicerca>();
  
  constructor() { }

  setNewPage(newPage: number): void {
    console.log(newPage);    
    this.inputRicerca = this.inputRicerca.changePage(newPage);
  }  

  setNewKey(newKey: string): void {
    console.log(newKey);
    this.inputRicerca = this.inputRicerca.changeKey(newKey);
  }

  onStatistiche(): Observable<StatisticheRicerca> {
    return this.statistiche$;
  }
  
  onFiltro(): Observable<Persona[]> {
    throw new Error("Method not implemented.");
  }
  
  onFilterChange(): Observable<OutputRicerca> {
    throw new Error("Method not implemented.");
  }
  
}
