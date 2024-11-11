import { describe, expect, it } from "vitest";
import {multi} from './multi'

describe('Función Multiplicar', () => {

    it('Multiplicar debe ser una función', () => {
        expect(typeof multi) . toBe('function');
    });

    it('Multiplicar debe multiplicar correctamente dos números positivos', () => {
        expect(multi(3,4)).toBe(12);
    });

    it('Multiplicar debe multiplicar correctamente dos números negativos', () => {
        expect(multi(-3,-4)).toBe(12);
    });

    it('Multiplicar debe multiplicar correctamente un número negativo y otro positivo', () => {
        expect(multi(-3,4)).toBe(-12);
    });

    it('Multiplicar debe multiplicar correctamente un número positivo y otro negativo', () => {
        expect(multi(3,-4)).toBe(-12);
    });
});