// JavaScript Data types
/* 
    * String;
    * Number;
    * Bigint;
    * Boolean;
    * Undefined;
    * null;
    * Symble;
    * Object;
*/

/* String */

let checkString = 'Hello World!'
console.log(checkString);
console.log(typeof checkString);

/* Number */

let a = 10;
let b = 20.6;

console.log(typeof a);

// Addition

let sum = a + b;
console.log('The Addition value of a & b: ' + sum);

/* Bigint */

let bigA = 9999999999999999;
console.log(bigA);
bigA = 999999999999999900n;
console.log(bigA);
console.log(typeof bigA);


/* Boolean */

let ifAdult = true;
console.log(ifAdult);
console.log(typeof ifAdult);

/* Undefined */

let unknownValue;
console.log(unknownValue);
console.log(typeof unknownValue);

/* Null */

let temp = null;
console.log(null);
console.log(typeof temp);

// Array

let myFavoriteAnime = ['Battle Trough The Heaven', 'Shikimori\'s not just a cutie', 'One Peice', 'The Dangers in My Heart', 'Soul Land'];
console.log(myFavoriteAnime);
console.log(typeof myFavoriteAnime);

// Object

let favoriteAnimeCharecters = {
    numberOne : 'Queen Madusa',
    numberTwo : 'Shikimori',
    numberThree : 'Luffy',
    numberfour : 'Zoro', 
};
console.log(favoriteAnimeCharecters);
console.log(typeof favoriteAnimeCharecters);