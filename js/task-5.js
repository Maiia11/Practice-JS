// Додай функціонал зміни теми при натисканні(подія change) на чекбокс
// #theme-switch-toggle у тулбарі.
// За замовчуванням тема світла.
// При зміні теми необхідно додавати на елемент body клас light-theme або dark-theme.
// Вибрана тема повинна зберігатись між перезавантаженнями сторінки.
// Для зберігання теми використовуй localStorage.
// Якщо при завантаженні сторінки тема темна, не забудь поставити властивість checked
// у чекбоксу #theme -switch-toggle у true, щоб повзунок зрушив у правильне положення.
// Для зручності зберігання списку використовуй такий перелік.
// const theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

// const body = document.querySelector("body");
// const input = document.querySelector(".theme-switch__toggle");

// input.addEventListener("change", clickHandle);

// function clickHandle(event) {
//     if (event.currentTarget.checked) {
//          body.classList.remove(theme.LIGHT);
//         body.classList.add(theme.DARK);
//         localStorage.setItem(`theme`, theme.DARK);
//     } else {
//         body.classList.remove(theme.DARK);
//         body.classList.add(theme.LIGHT);
//         localStorage.setItem(`theme`, theme.LIGHT);
        
//     }
    
// }
 
// if (localStorage.getItem(`theme`)) {
//     body.classList.add(localStorage.getItem(`theme`));
// } else {
//     body.classList.add(theme.LIGHT);
// }

// if (localStorage.getItem(`theme`) === theme.DARK) {
//     input.checked = true;
// }


// * Якщо імейл і пароль користувача збігаються, при сабміті зберігай дані з форми
// * у локальне сховище і змінюй кнопку login на logout і роби поля введення
// * Недоступними для зміни.
// * При перезавантаженні сторінки, якщо користувач залогінений, ми повинні бачити logout-кнопку
// * та недоступні для зміни поля з даними користувача.
// * Клік по кнопці logout повертає все в початковий вигляд і видаляє дані користувача
// * З локального сховища.
// *
// * Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// * повідомляти про помилку.


// const userData = {
//     email: "user@gmail.com",
//     password: 111,
// }


// const form = document.querySelector("#login-form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     if (form.elements.email.value !== userData.email || form.elements.password.value !== userData.password) {
//         alert("Ви ввелі неправильні дані");
//         return;
//     }
//     const data = {
//         email: form.elements.email.value;
//         password: form.elements.password.value;
//     }

// }

fetch("<https://jsonplaceholder.typicode.com/users>")
  .then(response => {
      // Response handling
      console.log(response);
  })
  .then(data => {
      // Data handling
      console.log(data);
  })
  .catch(error => {
      // Error handling
      console.log(error);
  }); 
  