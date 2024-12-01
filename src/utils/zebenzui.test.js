import { describe, expect, it } from "vitest";
import {zebenzui} from './zebenzui'

describe('Función Zebenzui', () => {

    it('Zebenzui debe ser una función', () => {
        expect(typeof zebenzui) . toBe('function');
    });
    
    it('Si la función recibe un número positivo devuelve true.', () => {
        expect(zebenzui(4)).toBe(true);
    });

    it('Si la función recibe un número negativo devuelve false.', () => {
        expect(zebenzui(-4)).toBe(false);
    });
    
    it('Si la función recibe un 0 devuelve null.', () => {
        expect(zebenzui(0)).toBe(null);
    });
});