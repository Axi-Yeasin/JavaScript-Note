// JavaScript Variable

let userName = 'Axisus';
console.log(`Hi There! I am ${userName}. I like to learn code`);

// Var Variable

var value1 = 10;
console.log(value1);

{   
    value1 = 20;
    console.log(value1);
}

/*
    * Var variable values can redeclare;
    * Var variable values can reassign;
    * Var variable is Global scoped;
    * var variable is hosted;
*/

// Let Variable

let value2 = 'I code my life';
console.log(value2);

// Variable Reassign
value2 = 'Life with code';
console.log(value2);

// Variable Redeclare
// ! let value2 = 'I am a looser';
// ! console.log(value2);

/* 
    * let variable is block scoped;
    * let variable values can reassign;
    ! let variable cannot be redeclare;
    ! let variable is not hosted;
*/

// const variable

const value3 = 20;
console.log(value3);

/* 
    ! const variable cannot be reassign;
    ! const variable cannot be redeclare;
    ! const variable is not hosted;
    * const variable is block scoped;
*/