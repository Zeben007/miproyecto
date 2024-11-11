import { describe, expect, it } from "vitest";
import {isWorkday} from './isWorkday'

describe('Función Laboral', () => {


    it('Laboral debe retornar true si el día introducido es "lunes"', () => {
        expect(isWorkday("lunes")).toBe(true);
    });

    it('Laboral debe retornar true si el día introducido es "martes"', () => {
        expect(isWorkday("martes")).toBe(true);
    });
    
    it('Laboral debe retornar true si el día introducido es "miércoles"', () => {
        expect(isWorkday("miércoles")).toBe(true);
    });
    
    it('Laboral debe retornar true si el día introducido es "jueves"', () => {
        expect(isWorkday("jueves")).toBe(true);
    });
    
    it('Laboral debe retornar true si el día introducido es "viernes"', () => {
        expect(isWorkday("viernes")).toBe(true);
    });
    
    it('Laboral debe retornar true si el día introducido es "sábado"', () => {
        expect(isWorkday("sábado")).toBe(false);
    });
    
    it('Laboral debe retornar true si el día introducido es "domingo"', () => {
        expect(isWorkday("domingo")).toBe(false);
    });
    
    it('Laboral debe retornar true si el día introducido es "juernes"', () => {
        expect(isWorkday("juernes")).toBe(false);
    });
});