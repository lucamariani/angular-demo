import { Component, OnInit } from '@angular/core';
import { RicercaService } from '../services/ricerca.service';
import { StatisticheRicerca } from '../models/statistiche-ricerca';

@Component({
  selector: 'app-statistica',
  templateUrl: './statistica.component.html',
  styleUrls: ['./statistica.component.css']
})
export class StatisticaComponent implements OnInit {

  constructor(private ricercaService: RicercaService) { }

  ngOnInit() {
    this.ricercaService.onStatistiche().subscribe(
      (s: StatisticheRicerca) => {
        console.log('nuove statistiche ricevute', s);
      }
    )
  }

}
