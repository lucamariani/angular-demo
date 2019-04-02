import { StatisticheRicerca } from '../models/statistiche-ricerca';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';
import { OutputRicerca } from '../models/output-ricerca';

export interface IRicercaService {
  setNewPage(newPage: number): void;
  setNewKey(newKey: string): void;
  onStatistiche(): Observable<StatisticheRicerca>;
  onFiltro(): Observable<Persona[]>;
  onFilterChange(): Observable<OutputRicerca>;
}
