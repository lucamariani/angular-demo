import { Component, OnInit } from '@angular/core';
import { faEdit,faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-risultati-tabella',
  templateUrl: './risultati-tabella.component.html',
  styleUrls: ['./risultati-tabella.component.css']
})
export class RisultatiTabellaComponent implements OnInit {
  faEdit = faEdit;
  faTimes = faTimes;
  constructor() { }

  ngOnInit() {
  }

}
