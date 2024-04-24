//  Додати метод getinfo в об'єкт  user, який повертає інформацію
//      про користувача у форматі:
// `Name: Peter. Surname: Parker. Age: 22. Position: spider-man`

// const user = {
//     name: "Peter",
//     surname: "Parker",
//     age: 22,
//     position: "spider-man"
// }


// user.getinfo = function () {
//     return `Name: ${this.name}. Surname: ${this.surname}. Age: ${this.age}. Position: ${this.position}`;
// }

// console.log(user.getinfo());




// Написати функцію, котра створить новий масив в якому
// не буде значень, які приводяться до false

// const array = [
//     1,
//     0,
//     54,
//     "doc",
//     null,
//     "jpg",
//     undefined,
//     "",
//     "png",
//     "exe",
//     false,
//     "mp4",
//     NaN,
//     "hbs"
// ]

// let  arr = []
// function newArr(array) {
//     for (const key of array) {
//         if (key ) {
//            arr.push(key)
//         }
        
//     }
// return arr
    
// }

// console.log(newArr(array));




// Напиши скрипт, який порвняє два масива і виведе у консоль результат:
// true - якщо всі елементи однакові і false - в іншоу випадку

// const arr1 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr2 = [6, "dream", -30, 11, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// const arr3 = [4, 232, 6, -30, "color", 324, "list", 1, 11, 9, "dream", 34, 0];
// const arr4 = ["color", 6, -30, 11, 9, 1, "dream", 324, 34, 4, 323, 0, "list"];

// const arr5 = [1, 4, 6, "color", "list", 11, 9, "dream", 34, 0, -30, "lesson"];
// const arr6 = [6, 324, "dream", -30, 9, 8, 34, "color", 4, 232, 0, "list", 11];

// const arr7 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr8 = [6, "dream", -30, 10, 9, 1, 324, 34, "color", 4, 232, 0, "list"];



// function comparisonArr(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     for (const value of arr1) {
//         if (arr2.includes(value)) {
//             return true;
//         }
//        return false;
//     }

    
// }

// console.log(comparisonArr(arr7, arr8));



//  Напишіть функцію calculateAvarage()
//  яка приймає довільну кількість
//  аргументів і повертає їхнє середнє значення.
//  Додати перевірку, що аргументи це числа.

// let sum = 0;
//  let totalCount = 0;

// function calculateAvarage(...args) {
    
//     for (const index of args) {
//         if (typeof index === "number") {
//             sum += index;
//             totalCount += 1;
//         }
        
//     }
//     const value = sum / totalCount;
//     return value;
// }
        


// console.log(calculateAvarage(7, 5, 8 ));




// Напишіть функцію chekKeyInObject(), яка приймає 2 параметри obj і key
// Функція буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true, в іншому разі - поверне false

// const user = {
//     name: "Igor",
//     car: "Mercedes",
//     carColor : "black"
// }

// 1) Варіант вирішення
// function chekKeyInObject(obj, key) {
//     for (const objKey in obj) {
//         if (objKey === key) {
//             return true;
//         }
//        return false
//     }
// }

// console.log(chekKeyInObject(user, "name"));

// 2)Варіант вирішення

// function chekKeyInObject(obj, key) {
//     return Object.keys(obj).includes(key);
// }


// console.log(chekKeyInObject(user, 'car'));

// Є об'єкт, у якому зберігаються обрані товари у кошику.
// Напишіть код для визначення загальної суми замовлення
// і зберіжіть його результат у змінній totalCost.
//     Якщо об'єкт cart порожній, то результат має бути 0.

const cart = {
    apple: 50,
    banana: 30,
    orange: 40,
}

let totalCost = 0;
function wichSumCart(obj) {
    const value = Object.values(obj);
    for (const val of value) {
        totalCost += val;
    }
    return totalCost;
  
}

console.log(wichSumCart(cart));
