import { describe, expect, it } from "vitest";
import {fiboZebenzui} from './fiboZebenzui'

describe('Función fiboZebenzui', () => {

    
    it('fiboZebenzui debe devolver la sucesión de Fibonacci en ela posición introducida', () => {
        expect(fiboZebenzui(1)).toBe(1);
    });
    
    it('fiboZebenzui debe devolver la sucesión de Fibonacci en ela posición introducida', () => {
        expect(fiboZebenzui(3)).toBe(2);
    });
    
    it('fiboZebenzui debe devolver la sucesión de Fibonacci en ela posición introducida', () => {
        expect(fiboZebenzui(10)).toBe(55);
    });
});