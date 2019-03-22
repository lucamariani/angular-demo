import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { RicercaService } from '../services/ricerca.service';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent implements OnInit {

  faSearch = faSearch;
  constructor(private ricercaService: RicercaService) { }

  ngOnInit() {
  }

  /**
   * Methods called from html must be public
   * @param event 
   */
  public keyChange(newKey: string) : void
  {
    this.ricercaService.setNewKey(newKey);
  }

}
