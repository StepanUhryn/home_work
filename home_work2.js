// 1) Оголосіть змінну типу number і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let myVarNumber = 5;
let myVarString = String(myVarNumber);
console.log(typeof myVarString);

// 2) Оголосіть змінну типу number і зробіть явне перетворення до типу boolean використовуючи “Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let myVarNumber = 5;
let myVarBoolean = Boolean(myVarNumber);
console.log(typeof myVarBoolean);

// 3) Оголосіть змінну типу number і зробіть явне перетворення до типу null використовуючи “Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

/* let myVarNumber = 5;
let myVarNull = Null(myVarNumber);              НЕ ПРАЦЮЄ !!!!!!!!!!!
console.log(typeof myVarNull); */  

// 4) Оголосіть змінну типу string і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let myVarString = '5';
let myVarNumber = Number(myVarString);
console.log(typeof myVarNumber);

//або

let myVarString = '5';
let myVarNumber = +myVarString;
console.log(typeof myVarNumber);

// 5) Оголосіть змінну типу string і зробіть явне перетворення до типу boolean використовуючи “Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let myVarString = '5';
let myVarBoolean = Boolean(myVarString);
console.log(typeof myVarBoolean);

// 6) Оголосіть змінну типу string і зробіть явне перетворення до типу null використовуючи “Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

Null() НЕ ПРАЦЮЄ !!!!!!!!!!!!!!!

// 7) Оголосіть змінну типу boolean і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let myVarBoolean = true;
let myVarString = String(myVarString);
console.log(typeof myVarString);

// 8) Оголосіть змінну типу boolean і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let myVarBoolean = true;
let myVarNumber = Number(myVarString);
console.log(typeof myVarNumber);

//або

let myVarBoolean = true;
let myVarNumber = +myVarString;
console.log(typeof myVarNumber);

// 9) Оголосіть змінну типу boolean і зробіть явне перетворення до типу null використовуючи Null()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

Null() НЕ ПРАЦЮЄ !!!!!!!!!!!!!!!

// 10) Оголосіть змінну типу null і зробіть явне перетворення до типу string використовуючи “String()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let myVarNull = null;
let myVarString = String(myVarNull);
console.log(typeof myVarString);

// 11) Оголосіть змінну типу null і зробіть явне перетворення до типу number використовуючи “Number()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let myVarNull = null;
let myVarNumber = Number(myVarNull);
console.log(typeof myVarNumber);

//або

let myVarNull = null;
let myVarNumber = +myVarNull;
console.log(typeof myVarNumber);

// 12) Оголосіть змінну типу null і зробіть явне перетворення до типу boolean використовуючи Boolean()”
// * Bиведіть в консоль тип змінної використовуючи оператор "typeof" і функцію "console.log()"

let myVarNull = null;
let myVarBoolean = Boolean(myVarNull);
console.log(typeof myVarBoolean);

// 13) Напишіть всі способи створення функції.

// -

        function funcName(параметри) {
             // код функції
        }

// -

      let funcName = function(параметри) {
          // код функції
      }  

// -

        let funcName = function(параметри) => {
            // код функції
        };


// 14) Напишіть функцію яка нічого не повертає
// * Викличіть функцію

        function sum(x, y) {};
        sum(x, y);

// 15) Напишіть функцію яка завжди буде повертати ваше імя
// * Викличіть функцію

function myName() {
    return 'Stepan'
 };
 myName();

// 16) Створіть функцію яка приймає 1 аргумент і повертає його без змін.
// * Викличіть функцію у двох різних варіантах, з даними aбо із змінними.

-
    let name = 'Stepan';
    function myName(name) {
        return name
    };
    myName(name);
    
-
    let number = 555;
    function myName(number) {
        return number
    };
    myName(number); 

// 17) Створіть функцію яка приймає 2 аргументи і повертає суму цих 2 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними aбо із змінними.

- 
    function getSum(x, y) {
        return x + y;
            };
    getSum(40, 60);

- 
    function getSum(x, y) {
        return x + y;
            };
    getSum('dd',' ggg');


// 18) Створіть функцію яка приймає 3 аргументи і повертає суму цих 3 аргументів.
// * Викличіть функцію у двох різних варіантах, з даними aбо із змінними.
 
- 
    function getSum(x, y, z) {
        return x + y + z;
            };
    getSum(40, 60, 100);

- 
    function getSum(x, y, z) {
        return x + y + z;
            };
    getSum('dd',' ggg ', 100);
     