export class StatisticheRicerca {
    /**
     * 
     * @param totali 
     * @param diCuiUomini 
     * @param diCuiDonne 
     * @param diCuiAltri 
     * @param totaliFatturati 
     * @param totaliFatturatiDiCuiUomini 
     * @param totaliFatturatiDiCuiDonne 
     * @param totaliFatturatiDiCuiAltri 
     */
    constructor(
        public readonly totali: Number,
        public readonly diCuiUomini: Number,
        public readonly diCuiDonne: Number,
        public readonly diCuiAltri: Number,
        public readonly totaliFatturati: Number,
        public readonly totaliFatturatiDiCuiUomini: Number,
        public readonly totaliFatturatiDiCuiDonne: Number,
        public readonly totaliFatturatiDiCuiAltri: Number
    ) 
    {
    }
}
