declare module 'rellax'{
    interface RellaxOptions {
        speed?: number;
        center?: boolean;
        wrapper?: string | HTMLElement;
        round?: boolean;
        vertical?: boolean;
        horizontal?: boolean;
        breakpoints?: number[];
      }
    
      class Rellax {
        constructor(selector?: string | HTMLElement, options?: RellaxOptions);
        refresh(): void;
        destroy(): void;
      }
    
      export default Rellax;
}