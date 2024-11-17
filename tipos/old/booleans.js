"use strict";
(() => {
    let isSuperman = true;
    let isBatman = false;
    console.log(isSuperman);
    console.log({ isSuperman });
    isSuperman = true && false;
    console.log({ isSuperman });
    isBatman = (isSuperman) ? true : false;
    //isSuperman = (isBatman) ? 'ABC' : "XYZ";
})();
