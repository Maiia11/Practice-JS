// // / /При натисканні на кнопку "SHOW ME", потрібно за допомогою alert
// // вивести значення, яке будемо вводити в інпут.

// // При натисканні на кнопку "SHOW ME", потрібно в консоль
// // вивести значення, яке будемо вводити в інпут.

// const btnEl = document.querySelector("#alertButton");
// const inputEl = document.querySelector("#alertInput");
// //console.dir(inputEl);
// btnEl.addEventListener("click", handleClick)

// function handleClick () {
//     alert(inputEl.value)
// }


// При натисканні на кнопку "Приховати" потрібно введені користувачем
// символи в інпут відображати у вигляді крапок замість звичайного
// тексту, а також змінити назву кнопки на "Показати", при повторному
// натисканні знову будемо відображати символи, а назва кнопки зміниться
// на "Приховати".

// const btnEl = document.querySelector("#passwordButton");
// const inputEl = document.querySelector("#passwordInput");

// btnEl.addEventListener("click", handleClick)

// function handleClick(event) {
//     if (inputEl.type === `text`) {
//         inputEl.type = `password`;
//         event.target.textContent = "Показати";
//         return
//     }
//     inputEl.type = `text`;
//      event.target.textContent = "Приховати";
    
// }


// Кнопка "Зменшити" повинна зменшувати квадрат на 10 пікселів.
// Кнопка "Збільшити" повинна збільшувати квадрат на 10 пікселів.

// const btnDscr = document.querySelector("#decrease");
// const btnIscr = document.querySelector("#increase");
// const box = document.querySelector("#box");
// ///console.dir(box) - бачимо що у div є такі властивості як оfsetHight i оfsetHight, вони відповідають за поточні розміри елемента
// btnDscr.addEventListener("click", onDscr)

// function onDscr() {
//     const { offsetHeight, offsetWidth } = box;
//     box.style.height = `${offsetHeight - 10}px`;
//     box.style.width = `${offsetWidth - 10}px`;
    
// }


// btnIscr.addEventListener("click", onIscr)

// function onIscr() {
//     const { offsetHeight, offsetWidth } = box;
//     box.style.height = `${offsetHeight + 10}px`;
//     box.style.width = `${offsetWidth + 10}px`;
// }

//При кліку на кнопку "Подвоїти" збільшувати значення в кожному елементі списку в два рази.

// const listItemEl = document.querySelectorAll(".listItem")
// const btnEl = document.querySelector("#double");
// btnEl.addEventListener("click", handleClick);
// //Метод forEach, цикл for of, властивість length працюють на псевдомасиві, тому мі можемо його застосувати. Якщо інші методи застосовуємо оператор [...spred], робимо із псевдомасива - масив.
// function handleClick() {
//     listItemEl.forEach(item => item.textContent = item.textContent * 2);
    
// }


//Наведено список людей. Зроби можливість фільтрації (пошуку) за ім'ям або за прізвищем.

// const inputEl = document.querySelector(".contactsFilter");
// const ulEl = document.querySelector(".contacts");
// const liEl = document.querySelectorAll(".contact");

// inputEl.addEventListener("input", onInput);

// function onInput(event) {
//     const valueEl = event.target.value.toLowerCase().trim();
//     const filteredEl = [...liEl].filter(item => item.textContent.toLowerCase().includes(valueEl));
//     ulEl.innerHTML = "";
//     ulEl.append(...filteredEl);

//  }

//При кліку на кнопку філтер треба видалити з списку позначені елементи

const form = document.querySelector(".checkboxForm");
const wrapper = document.querySelectorAll(".checkboxWrapper");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const filteredArr = [...wrapper]
    .filter(item => item.lastElementChild.checked)
    .forEach(item => item.remove());
}

