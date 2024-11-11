import { describe, expect, it } from "vitest";
import {validateText} from './validateText'

describe('Función Validar Texto', () => {

    it('Validar texto debe validar texto que presente entre 6 y 10 caracteres alfabéticos en minúsculas o mayúsculas', () => {
        expect(validateText("Holaquetal")).toBe(true);
    });

    it('Validar texto no debe validar texto que presente entre 6 y 10 caracteres no alfabéticos', () => {
        expect(validateText("Hol4quetal")).toBe(false);
    });
    
    it('Validar texto no debe validar texto que presente menos de 6 o más de 10 caracteres alfabéticos', () => {
        expect(validateText("Hola")).toBe(false);
    });
});