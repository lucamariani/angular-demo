import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RicercaComponent } from './ricerca/ricerca.component';
import { StatisticaComponent } from './statistica/statistica.component';
import { RisultatiTabellaComponent } from './risultati-tabella/risultati-tabella.component';
import { RisultatiPaginazioneComponent } from './risultati-paginazione/risultati-paginazione.component';


@NgModule({
  declarations: [
    AppComponent,
    RicercaComponent,
    StatisticaComponent,
    RisultatiTabellaComponent,
    RisultatiPaginazioneComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
