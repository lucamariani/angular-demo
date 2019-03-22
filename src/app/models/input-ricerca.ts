/**
 * Make this class immutable
 * in order to help Angular's change 
 * detection mechanism
 */
export class InputRicerca {
  
    /**
     * 
     * @param key 
     * @param page 
     * @param pageLen 
     */
    constructor(
        public readonly key: String = "",
        public readonly page: number = 1,
        public readonly pageLen: number = 10
    ) 
    {}

    changePage(newPage: number): InputRicerca {
        return new InputRicerca(this.key, newPage, this.pageLen);
      }

    changeKey(newKey: string): InputRicerca {
        return new InputRicerca(newKey, this.page, this.pageLen);
      }
}
