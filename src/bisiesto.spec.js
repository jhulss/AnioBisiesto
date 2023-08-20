import bisiesto from "./bisiesto";

describe("Bisiesto", () => {
    it("deberia considerar 1996 como anio bisiesto", () => {
      const bi = new bisiesto();
        expect(bi.verificarBisiesto(1996)).toEqual("El anio es bisiesto");
    });

    it("deberia considerar 2055 como anio NO bisiesto", () => {
        const bi = new bisiesto();
          expect(bi.verificarBisiesto(2005)).toEqual("El anio no es bisiesto");
      });
    
      it("deberia considerar cualquier anio ingresado como bisiesto", () => {
        const bi = new bisiesto();
          expect(bi.verificarBisiesto(2008)).toEqual("El anio es bisiesto");
      });
  });