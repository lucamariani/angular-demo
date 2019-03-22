import { Component, OnInit } from '@angular/core';
import { RicercaService } from '../services/ricerca.service';

@Component({
  selector: 'app-statistica',
  templateUrl: './statistica.component.html',
  styleUrls: ['./statistica.component.css']
})
export class StatisticaComponent implements OnInit {

  constructor(private ricercaService: RicercaService) { }

  ngOnInit() {
  }

}
