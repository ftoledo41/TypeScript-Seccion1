"use strict";
(() => {
    // never usualmente termina en un error en el navegador
    const error = (message) => {
        throw new Error(message);
    };
    // o
    const error2 = (message) => {
        if (false)
            throw new Error(message);
        return 1;
    };
    error("Auxilio!");
})();
