import { describe, expect, it } from "vitest";
import {zebenzuiMaxOfThree} from './zebenzuiMaxOfThree'

describe('Función Mayor', () => {


    it('Mayor debe retornar a si se cumple que a es mayor que b y a es mayor que c', () => {
        expect(zebenzuiMaxOfThree(5,3,4)).toBe(5);
    });
    
    it('Mayor debe retornar c si no se cumple que a es mayor que b y a es mayor que c y se cumple que c es mayor que b', () => {
        expect(zebenzuiMaxOfThree(5,3,7)).toBe(7);
    });

    it('Mayor debe retornar b si a no es mayor que b ni c es mayor que b', () => {
        expect(zebenzuiMaxOfThree(5,7,6)).toBe(7);
    });

    it('Mayor debe retornar c si a no es mayor que b y c es mayor que b', () => {
        expect(zebenzuiMaxOfThree(5,7,9)).toBe(9);
    });
});