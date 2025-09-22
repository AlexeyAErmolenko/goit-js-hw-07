goit-js-hw-07 <br>
    що таке об'єктна модель документа і як будується ієрархія DOM-елементів <br>
    про основні властивості та атрибути DOM-елементів <br>
    як маніпулювати DOM деревом, створюючи та видаляючи елементи в ньому <br>
    про сутність та функціонал подій у браузері <br>
    про обробку подій з використанням методів addEventListener(), removeEventListener() <br>
    як застосовувати події елементів форм <br>
Для стилізації розмітки твоїх завдань використовуй цей макет https://www.figma.com/file/m8k9NQV7qZrtYDCvxfD68B/%D0%94%D0%97-JavaScript?type=design&node-id=0-1&mode=design&t=5dMtUnN59NyVpg7o-0 <br>
 <br>
Завдання 1 <br>
HTML містить список категорій ul#categories.  <br>
<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Parsley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
 <br>
З використанням властивостей і методів DOM-елементів, напиши скрипт, який: <br>
    Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. <br>
    Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2></h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього). <br>
 <br>
На що буде звертати увагу ментор при перевірці: <br>
    Кількість категорій, їх назва та кількість елементів отримані за допомогою властивостей і методів DOM-елементів <br>
    Дані за кожною категорією були отримані й виведені в консоль у тілі циклу або методу forEach() <br>
    У консолі має бути виведено наступне повідомлення: <br>
 <br>
Завдання 2 <br>
Напиши скрипт для створення галереї зображень на основі масиву даних. HTML містить список ul.gallery. <br>
<ul class="gallery"></ul>
Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. <br>
Ти можеш створити й додати HTML-елементи, використовуючи document.createElement() і elem.append() або шаблонні рядки і elem.insertAdjacentHTML(). <br>
    Усі елементи галереї повинні додаватися в DOM за одну операцію додавання. <br>
    Додай мінімальне оформлення галереї флексбоксами через CSS класи. <br>
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];
 <br>
На що буде звертати увагу ментор при перевірці: <br>
    Створена й додана в DOM галерея із шести зображень <br>
    Галерея додана у список ul.gallery і являє собою 6 елементів <li>, в які вкладені елементи <img> <br>
    Для створення елементів <img> використані дані з масиву об’єктів images <br>
    Усі елементи галереї додані в DOM за одну операцію додавання <br>
    Є мінімальне оформлення галереї флексбоксами через CSS класи <br>
 <br>
Завдання 3 <br>
Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous". <br>
 <br>
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
 <br>
На що буде звертати увагу ментор при перевірці: <br>
    На елементі input#name-input прослуховується подія input <br>
    Під час набору тексту в інпуті його поточне значення підставляється в span#name-output як ім’я для привітання <br>
    Значення в інпуті очищене від пробілів по краях <br>
    Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous" <br>
 <br>
Завдання 4 <br>
Напиши скрипт управління формою логіна. <br>
 <br>
<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Log in</button>
</form>
 <br>
    відправлення форми form.login-form повинна відбуватися за подією submit. <br>
    Під час відправлення форми сторінка не повинна перезавантажуватися. <br>
    Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS. <br>
    Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements. <br>
    При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset. <br>
 <br>
На що буде звертати увагу ментор при перевірці: <br>
    Прослуховується подія submit <br>
    Під час відправлення форми сторінка не перезавантажується <br>
    Якщо при сабміті у формі є незаповнені поля, виводиться alert <br>
    При сабміті в консоль виводиться об’єкт з двома властивостями, де ключі — це ім’я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях <br>
    Після сабміту елементи форми очищаються <br>
 <br>
Завдання 5 <br>
Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color. <br>
 <br>
<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
 <br>
Для генерування випадкового кольору використовуй функцію getRandomHexColor(). <br>
function getRandomHexColor() { <br>
  return `#${Math.floor(Math.random() * 16777215) <br>
    .toString(16) <br>
    .padStart(6, 0)}`; <br>
} <br>
 <br>
Зверни увагу, що функція getRandomHexColor() повертає колір у hex-форматі, в той час, як колір фону на <body> буде у форматі rgb. Це нормально й не потребує якихось правок. <br>
 <br>
На що буде звертати увагу ментор при перевірці: <br>
    Фон на <body> задається тільки після кліку на button.change-color <br>
    При кожному кліку на елемент button.changecolor фон <body> зафарбовується новим рандомним кольором <br>
    На <body> і span.color значення одного й того самого кольору
