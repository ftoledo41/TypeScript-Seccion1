"use strict";
(() => {
    // Con any no tenemos acceso a las propiedades de number o string, etc.
    let avenger = 123;
    let exists;
    let power;
    avenger = "Dr Strange";
    console.log(avenger.charAt(0));
    console.log(avenger.charAt(0));
    avenger = 150.132323;
    console.log(avenger.toFixed(2));
    console.log(avenger.toFixed(2));
    console.log({ exists });
    console.log({ power });
})();
