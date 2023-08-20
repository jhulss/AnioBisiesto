import bisiesto from "./bisiesto";

describe("Bisiesto", () => {
    it("deberia considerar 1996 como anio bisiesto", () => {
      const bi = new bisiesto();
        expect(bi.verificarBisiesto(1996)).toEqual("El anio es bisiesto");
    });
  });