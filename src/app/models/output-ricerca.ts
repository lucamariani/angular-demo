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
        public readonly numPersoneFiltrate: Number,
        public readonly page: Number,
        public readonly pageLen: Number,
        public readonly statistiche: StatisticheRicerca
    ) 
    {
    }
}
