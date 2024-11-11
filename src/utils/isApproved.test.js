import { describe, expect, it } from "vitest";
import {isApproved} from './isApproved'

describe('Función Aprobado', () => {


    it('Aprobado debe retornar nulo si la nota es mayor que 10', () => {
        expect(isApproved(14)).toBe(null);
    });
    
    it('Aprobado debe retornar true si la nota es mayor o igual que 5 o menor o igual que 10', () => {
        expect(isApproved(10)).toBe(true);
    });

    it('Aprobado debe retornar nulo si la nota es menor que 0', () => {
        expect(isApproved(-1)).toBe(null);
    });
    
    it('Aprobado debe retornar falso si la nota es menor que 5 y mayor que 0', () => {
        expect(isApproved(4)).toBe(false);
    });
});