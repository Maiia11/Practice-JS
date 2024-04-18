//  Функція дли визначення типу змінної:
// Написати функцію для визначення типу змінної.Функція отримує будь - яке значення в якості аргументу
// і визначає тип цієї змінної.Вводить в консоль
// повідомлення 'Тип змінної: type'


// function wichType(value) {
//     const type = typeof value;
//      return `Тип змінної: ${type}`;
// }


// console.log(wichType(true))


// Написати функцію для обчислення довжини рядка.
// Функція отримує рядок в якості аргументу і
// вивводить в консоль повідомлення "довжина рядка Length"

// function lengthString(string) {
//     return `довжина рядка ${string.length}`
    
// }

// console.log(lengthString("Hello"));



// Оголоси функцію hasDiscount(age, isStudent, isPensioner),
//     яка перевіряє, чи покупець має право на знижку.
// І повертає true - якщо має право на знижку і false, якщо ні.
// Покупець має право на знижку, якщо він є студентом
// або пенсіонером, або вік його між 12 і 18 роками(включно).
// Значення параметрів будуть задаватися під час виклику функції:
// age - вік покупця
// isStudent - буль(вказує чи покупець студентом)
// isPensioner - буль (вказує чи є покупець пенсіонером)


// function hasDiscount(age, isStudent, isPensioner) {
//     return isStudent || isPensioner || (age >= 12 && age <= 18);
// }

// console.log(hasDiscount(68, false, true));


// Оголоси функцію canRegisterOnSite(age, hasAcceptedTerms),
//     яка перевіряє, чи може користувач зареєструватись на сайті.
//     І повертає true - якщо може зареєструватись і false, якщо ні.
//     Користувач може зареєструватись, якщо йому виповнилось 13 років
//     і він прийняв умови використання.
//     Значення параметрів будуть задаватися під час виклику функції:
// age - вік користувача
//     hasAcceptedTerms -буль(вказує чи прийняв користувач умови використання)


// function canRegisterOnSite(age, hasAcceptedTerms) {
//     return age >= 13 && hasAcceptedTerms;

// }

// console.log(canRegisterOnSite(10, true));


// Оголоси функцію checkString(value), яка перевіряє
// чи отримане значення є рядком і містить символ $.
// Якщо це так, виведіть кількість символів у рядку.
// Якщо значенн не рядком, виведіть повідомлення про невірний ввід.

// function checkString(value) {

//     1 варіант
//     // if (typeof value === `string` && value.includes(`$`)) {
//     //    return value.length;
//     // } else {
//     //     return `невірний ввід`
//     // }

//     2 варіант

//    return typeof value === `string` && value.includes(`$`) ? value.length : `невірний ввід`;
// }


// console.log(checkString("555"));


// Напишіть цикл(for), який виведе в консоль усі парні числа від max
// до min включно по зменшенню

// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i--) {

//     1- Варіант
//     // const res = i - (i % 2);
//     // console.log(res);

//     2-Варіант
    
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// За допомогою циклу for  знайдіть суму усіх парних чисел у проміжку
// const max = 50;
// const min = 0;
// let sum = 0;


// for (let i = min; i <= max; i++) {
//     if (i % 2 === 0) {
//         sum += i;
      
//     }
    
// }
// console.log(sum);

// // Напишіть програму, яка обчислить суму всіх чисел(за допомогою циклу for)
// //     від 1 до 100, які діляться на 3 або на 5. І виведи в консоль рядок:
// // `Сума чисел, які діляться на 3 або на 5 від 1 до 100: ${sum}`
    
// let sum = 0;

// for (let i = 1; i <= 100; i++){
//     if (i % 3 === 0 || i % 5 === 0) {
//         sum += i;
         
//     }

// }

// console.log(`Сума чисел, які діляться на 3 або на 5 від 1 до 100: ${sum}`);



// Написати функцію getCountryInfo(country), котра буде отримквати назву країни і вводити інформацію про неї
// China - "Китай - найбільша країна за населенням у світі"
// Australia - "Австралія - найбільший острів та країна в океані"
// France - "Франція відома своєю гастрономі.ю та мистецтвом"
// Germany - "Німеччина - найбільша економіка у Європі"
// Canada - "Канада - друга за площею країна у світі, відома своєю природою".
// Якщо країни немає, вивести повідомлення "Інформація про країну відсутня"


// function getCountryInfo(country) {
//     let info;
//     switch (country) {
//         case "China":
//             info = "Китай - найбільша країна за населенням у світі";
//             break;
//         case "Australia":
//            info = "Австралія - найбільший острів та країна в океані";
//             break
//         case "France":
//            info = "Франція відома своєю гастрономі.ю та мистецтвом";
//             break;
//         case "Germany":
//            info = "Німеччина - найбільша економіка у Європі";
//             break;
//         case "Canada":
//            info = "Канада - друга за площею країна у світі, відома своєю природою";
//             break;
//         default:
//             info = "Інформація про країну відсутня";
        
//     }

//     return info;
// }

// console.log(getCountryInfo("China"));

// Напишіть функцію formatMinutesToTime(minutes), котра
// отримає від користувача число(кількість хвилин) і виведе
// в консоль рядок у форматі годин і хвилин, тобто, якщо користувач вказав число 70, в консолі має бути 01 год 10 хвилин


// function formatMinutesToTime(minutes) {
//     const hours = Math.floor(minutes / 60);
//     const modufHours = String(hours).padStart(2, "0");
//     const modMinutes = String(minutes % 60).padStart(2, "0");

//     return `${modufHours}:${modMinutes}`;

// }


// console.log(formatMinutesToTime(338));