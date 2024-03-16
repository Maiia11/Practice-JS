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
// ///console.dir(box)
// // OfsetHight i OfsetHight
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