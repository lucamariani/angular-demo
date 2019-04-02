import { Component, OnInit } from '@angular/core';
import { faEdit,faTimes } from '@fortawesome/free-solid-svg-icons';
import { RicercaService } from '../services/ricerca.service';
import { OutputRicerca } from '../models/output-ricerca';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-risultati-tabella',
  templateUrl: './risultati-tabella.component.html',
  styleUrls: ['./risultati-tabella.component.css']
})
export class RisultatiTabellaComponent implements OnInit {
  faEdit = faEdit;
  faTimes = faTimes;
  persone: Persona[];

  constructor(private ricercaService: RicercaService) { }

  ngOnInit() {
    this.ricercaService.onFiltro().subscribe(      
      (p: Persona[]) => { this.persone = p }
    )
  }

}
