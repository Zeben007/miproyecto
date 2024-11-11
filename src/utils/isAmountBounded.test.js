import { describe, expect, it } from "vitest";
import {isAmountBounded} from './isAmountBounded'

describe('Función Cantidad', () => {

    
    it('Cantidad debe retornar true si el número introducido es mayor o igual que 1 o menor o igual que 1000', () => {
        expect(isAmountBounded(10)).toBe(true);
    });

    it('Cantidad debe retornar false si el número introducido es menor que 1 o mayor que 1000', () => {
        expect(isAmountBounded(1001)).toBe(false);
    });
});