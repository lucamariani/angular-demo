export class InputRicerca {
    /**
     * 
     * @param key 
     * @param page 
     * @param pageLen 
     */
    constructor(
        public readonly key: String = "",
        public readonly page: Number = 1,
        public readonly pageLen: Number = 10
    ) 
    {

    }
}
