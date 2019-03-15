export enum Sesso { Maschio, Femmina, Altro }

/**
 * define variables implicitly in constructor
 */
export class Persona {
    constructor(
        public readonly nome: string,
        public readonly cognome: string,
        public readonly eta: number,
        public sesso: Sesso 
        ) {}

    get fullName(): string {
        return this.nome + " " + this.cognome
    }
}

