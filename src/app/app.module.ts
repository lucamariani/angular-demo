import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RicercaComponent } from './ricerca/ricerca.component';
import { StatisticaComponent } from './statistica/statistica.component';
import { RisultatiTabellaComponent } from './risultati-tabella/risultati-tabella.component';
import { RisultatiPaginazioneComponent } from './risultati-paginazione/risultati-paginazione.component';
import { RicercaServiceFake } from './services/ricerca.service.fake';
import { RicercaService } from './services/ricerca.service';
import { environment } from 'src/environments/environment';
import { SexToCharPipe } from './sex-to-char.pipe';
import { SexComponent } from './sex/sex.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { PersoneIndexComponent } from './persone-index/persone-index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    RicercaComponent,
    StatisticaComponent,
    RisultatiTabellaComponent,
    RisultatiPaginazioneComponent,
    SexToCharPipe,
    SexComponent,
    PersoneIndexComponent,
    PageNotFoundComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: environment.diRules,
  bootstrap: [AppComponent]
})
export class AppModule { }
