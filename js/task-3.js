// //Урок №3
// / // const getUsersWithFriend = (users, friendName) => {
// // //   return users.filter(user => user.friends.includes(friendName));
// // // }
// const allUsers = [
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"]
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"]
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ];

// //console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []













// // Виконайте сортування масиву цін за спаданням та зростанням.
// const prices = [1000, 240, 670, 360, 89, 20];

// Перевірити чи всі студенти старші 18 років.

// const students = [
//   { name: 'Alex', age: 17 },
//   { name: 'Stas', age: 18 },
//   { name: 'Mike', age: 22 },
//   { name: 'Den', age: 20 },
// ];



// // Є масив користувачів, кожен з яких має поля id та name. 
// //  Потрібно знайти той де id = 1 і виведемо ім'я цього користувача у консоль

//  let users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Pete"},
//   {id: 3, name: "Mary"}
// ];

// // Зібрати в allTopics масив всіх предметів всіх курсів.
// //Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];











// const friends = [
//     { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
//     { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
//     { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
//     { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
//     { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
//     { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
// ]
// //Напишіть функцію getGirlsPassports() яка поверне масив номерів паспортів дівчат.

// Напишіть функцію getTotalBoysYears() яка порахує загальний вік хлопців.

// function getTotalBoysYears(friends) {
//   return friends.filter(friend => friend.sex === `m`)
//     .reduce((acc, friend) =>  acc + friend.age
//   , 0)
  
// }

// // Маємо масив об'єктів, який представляє список замовлень:
// // Завдання: 
// // 1. Перевірте, чи всі замовлення виконані.
// // 2. Поверніть список товарів з усіх виконаних замовлень.

// const orders = [
//   { id: 1, products: ['Milk', 'Bread'], status: 'completed' },
//   { id: 2, products: ['Eggs', 'Juice'], status: 'processing' },
//   { id: 3, products: ['Pasta', 'Spices'], status: 'completed' },
// ];

// const result = orders.every(product => product.status === `completed`);
// const orderList = orders.filter(product => product.status === `completed`)
//   .flatMap(product => product.products)
// console.log(orderList);

// // маємо масив об'єктів, який представляє список товарів і їх цін:
// // Завдання: Знайдіть суму вартості всіх товарів, які коштують більше 10 гривень.
// const products = [
//   { name: 'Milk', price: 20 },
//   { name: 'Bread', price: 10 },
//   { name: 'Eggs', price: 15 },
// ];

// const result = products.filter(product => product.price > 10)
//   .map(product => product.price)
//   .reduce((acc, price) => acc + price, 0);
// console.log(result);



// // Є об'єкт і функція для підрахунку суми чисел.
// // Виведіть у консоль результат виконання функції, якщо a = 3, b = 5.


// // Є два об'єкти, які описують деякі характеристики телефонів.
// // Потрібно викликати метод showInfo, щоб він логував інформацію про кожний телефон,
// // передаючи аргументом країну-виробник телефону.
// // "HUAWEI" - "China", "SAMSUNG" - "South Korea".

// const tel = {
//     regNumber: "AE8345FEDAS",
//     brand: "HUAWEI", 
//     showInfo(country) {
//         console.log(`${country} ${this.regNumber} ${this.brand}`);
//     }
// }

// const tel_2 = {
//     regNumber: "AO8518FEGHT",
//     brand: "SAMSUNG", 

// }

// tel.showInfo (`Ukraine`)
// tel.showInfo().call(tel_2, `Soer Corea`)// 1 variant
// tel.showInfo().apply(tel_2, [`Soer Corea`]) // 2 variant
// const res = tel.showInfo().bind(tel_2, `Soer Corea`)
// res()

// //Напиши клас Rectangle який створює об'єкт
// //з властивостями height, width
// //і методом calculateArea() для підрахунку прлощі прямокутника.

// class Rectangle {
//     constructor(height, width){
//       this.height = height
//       this.width = width
//   }
//   calculateArea() {
//     return this.height * this.width;
//   }
  
// }
// const rectange = new Rectangle(5, 10)
// console.log(calculateArea())// 50

// //Напиши клас Client який створює об'єкт
// //з властивостями login, email
// //Оголоси приватні властивості #login #email,
// //доступ до яких зроби через геттер та сеттер login email

// class Client {
//   #login;
//   #email;
//     constructor(login, email) {
//       this.#login = login
//       this.#email = email
//   }
//   get login() {
//     return this.#login
//   }
  
//   set login(newLogine) {
//    this.#login = newLogine
    
//   }

//   get email() {
//     return this.#email
//   }
  
//   set email(newEmail) {
//    this.#email = newEmail

//   }

// }
// const user = new Client("Ivan", "ivan.@gmail.com");
// console.log(user.login)// Ivan
// console.log(user.email)//ivan.@gmail.com

// user.login = "Anna";
// user.email = "Anna.@gmail.com";
// console.log(user.login)// Anna
// console.log(user.email)//Anna.@gmail.com


// // Створи клас Phone який створює об'єкт з властивістю price.
// // Додай статичну властивість MAX_PRICE зі значенням 40000 - максимально допустима ціна телефону.
// // Оголоси приватну властивість price доступ до якої буде через геттер та сеттер.
// // Додай сетеру price перевірку значення параметра newPrice, що передається.Якщо воно більше за MAX_PRICE,
// // сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну телефону.
// class Phone {
//   static MAX_PRICE = 40000;
//   #price
//   constructor(price) {
//     this.#price = price;
    
//   }
//   get price() {
//   return this.#price
//   }
  
//   set price(newPrice) {
//     if (this.#price < Phone.MAX_PRICE) {
//       this.#price = newPrice;
//       return
//     } else return
//   }
// }
// const phone = new Phone(20000);

// console.log(phone.price);///20000

// phone.price = 40000
// console.log(phone.price);//40000

// phone.price = 43000
// console.log(phone.price);//нічого не буде

