import { Component, OnInit } from '@angular/core';
import { RicercaService } from '../services/ricerca.service';

@Component({
  selector: 'app-risultati-paginazione',
  templateUrl: './risultati-paginazione.component.html',
  styleUrls: ['./risultati-paginazione.component.css']
})
export class RisultatiPaginazioneComponent implements OnInit {

  page : number = 1;
  collSize: number;
  constructor(private ricercaService: RicercaService) { }

  ngOnInit() 
  {
    this.ricercaService.onFilterChange().subscribe(
      (r => {
        if(!!r) {
          this.page = r.page;
          this.collSize = r.numPersoneFiltrate;
        }        
        // console.log(r)
      })
    )
  }

  public pageChange(newPage: number) : void
  {    
    this.ricercaService.setNewPage(newPage);
  }

}
