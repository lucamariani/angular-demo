import { Component, OnInit, Input } from '@angular/core';
import { Sesso } from '../models/persona';

@Component({
  selector: 'app-sex',
  templateUrl: './sex.component.html',
  styleUrls: ['./sex.component.css']
})
export class SexComponent implements OnInit {
  @Input("sesso") s: Sesso;
  constructor() { }

  ngOnInit() {
  }

}
