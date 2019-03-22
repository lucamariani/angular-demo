import { Injectable } from '@angular/core';
import { InputRicerca } from '../models/input-ricerca';

@Injectable({
  providedIn: 'root'
})
export class RicercaService {  
  private inputRicerca: InputRicerca = new InputRicerca();
  constructor() { }

  setNewPage(newPage: number): void {
    console.log(newPage);    
    this.inputRicerca = this.inputRicerca.changePage(newPage);
  }  

  setNewKey(newKey: string): void {
    console.log(newKey);
    this.inputRicerca = this.inputRicerca.changeKey(newKey);
  }

}
