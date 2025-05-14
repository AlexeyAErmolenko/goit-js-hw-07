// Завдання 5
// Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.

// На що буде звертати увагу ментор при перевірці:
//     Фон на <body> задається тільки після кліку на button.change-color
//     При кожному кліку на елемент button.change-color фон <body> зафарбовується новим рандомним кольором
//     На <body> і span.color значення одного й того самого кольору

function bodyBackgroundColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.querySelector(".change-color").addEventListener("click", handleClick);

function handleClick(event) {
  const randomColor = bodyBackgroundColor();
  document.querySelector("body").style.backgroundColor = randomColor;
  document.querySelector(".color").textContent = randomColor;
}
