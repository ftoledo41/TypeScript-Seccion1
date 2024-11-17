"use strict";
// funcion anonima autoinvocada para que no choque nuestro codigo en caso de que existen variables con el mismo nombre, esto se encarga de encapsular el codigo
(() => {
    var _a;
    const batman = "Batman";
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Heroe: Volcan Negro`;
    const abc = 123;
    console.log({ batman });
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No esta batman");
})();
