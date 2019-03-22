import { Persona } from './persona';
import { StatisticheRicerca } from './statistiche-ricerca';

export class OutputRicerca {
    /**
     * 
     * @param persone 
     * @param numPersoneFiltrate 
     * @param page 
     * @param pageLen 
     * @param statistiche 
     */
    constructor(
        public readonly persone: Persona[],
        public readonly numPersoneFiltrate: number,
        public readonly page: number,
        public readonly pageLen: number,
        public readonly statistiche: StatisticheRicerca
    ) 
    {
    }
}
