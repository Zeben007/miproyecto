import { describe, expect, it } from "vitest";
import {div} from './div'

describe('Función División', () => {

    it('División debe ser una función', () => {
        expect(typeof div) . toBe('function');
    });
    
    it('División debe dividir dos números positivos enteros y debe dar un número positivo.', () => {
        expect(div(4,2)).toBe(2);
    });

    it('División debe dividir dos números negativos enteros y debe dar un número positivo', () => {
        expect(div(-4,-2)).toBe(2);
    });
    
    it('División debe dividir un número positivo y otro negativo y debe dar un número negativo', () => {
        expect(div(4,-2)).toBe(-2);
    });
});