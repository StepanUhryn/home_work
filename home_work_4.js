// 1. Виведіть користувачу попап використовуючи функцію "alert" який містить довільне повідомлення.

alert('ddddddddddddd');

// 2. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте
// у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"

let hobby = prompt('You like fishing?');
alert(`${hobby}, you is fisher!`); // Yes, you is fisher!!
console.log(hobby);

// 3. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і має дефолтнe значення "13". Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"

let are = prompt('How old are you?',13);
alert(`You are ${are} years old`); // Yes you is fisher!!
console.log(are);

// 4. Виведіть користувачу попап використовуючи функцію "confirm" який містить довільне питання. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"

let rezult = confirm('ggg hhh');
console.log(rezult);

// 5. Виведіть користувачу попап використовуючи функцію "confirm" який містить довільне питання. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "if" виведіть в консоль "1" якщо відповідь на питання була позитивна

let rezult = confirm('ggg hhh');
console.log(rezult);
if (rezult === true) {
    console.log(1);
    } else {
    console.log(2)
};

// 6. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "if else" виведіть в консоль "1" або "2"

let hobby = prompt('You like fishing?');
alert(`${hobby}, you is fisher!`); // Yes you is fisher!!
console.log(hobby);
if (hobby === null) {
    console.log(2);
} else {
    console.log(1)
};

// 7. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "if else" виведіть в консоль "1" або "2" або "3"

let hobby = prompt('You like fishing?');
alert(`${hobby}, you is fisher!`); // Yes you is fisher!!
console.log(hobby);
if (hobby === null) {
        console.log(2);
    } else if (hobby === '') {
        console.log(3)
    } else {console.log(1)
};

// 8. Виведіть користувачу попап використовуючи функцію "confirm" який містить довільне питання. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" якщо відповідь на питання була позитивна

let rezult = confirm('question');
alert(rezult);
console.log(rezult);
  switch (rezult) {
      case true :
        console.log(1);
    break; 
      case false :
        console.log(2);
    break;
     };

// 9. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" або "2"

let hobby = prompt('hhh');
console.log(hobby);
switch (hobby) {
    case 'yes' :    
        console.log(1);
    break;
    case null :    
        console.log(2);
    break;
   };

// 10. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" або "2" або "3"

let hobby = prompt('hhh');
console.log(hobby);
switch (hobby) {
    case 'yes' :    
        console.log(1);
    break;
    case null :    
        console.log(2);
    break;
    case '' :
        console.log(3);
     break;
};
    
// 11. Виведіть користувачу попап використовуючи функцію "prompt" який містить довільне питання і не має дефолтного значення. Результат присвойте у змінну.
// *Виведіть змінну в консоль за допомогою "console.log"
// *Використовуючи "switch" виведіть в консоль "1" або "2" або "3", виконайте те саме за допомогою "if else";
// *Зробіть два різні приклади

let rrr = prompt('question');
console.log(rrr);
switch (rrr) {
    case 'yes' :    
        console.log(1);
    break;
    case null :    
        console.log(2);
    break;
    case '' :
        console.log(3);
     break;
};
    


let rrr = prompt('question');
console.log(rrr);
    if (rrr === 'yes') {    
            console.log(1);
    }  else if (rrr === null) {   
        console.log(2);
    } else { 
        console.log(3);
    };