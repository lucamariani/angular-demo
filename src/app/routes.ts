import { Routes } from '@angular/router';
import { PersoneIndexComponent } from './persone-index/persone-index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const appRoutes: Routes = [
    { path: 'persone', component: PersoneIndexComponent },
    // { path: 'editPersona/:id', component: HeroDetailComponent },
    {
      path: '',
      redirectTo: '/persone',
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
  ];