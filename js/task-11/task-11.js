// Створіть функцію  generatePetCard,
// котра отримує  3 аргументи: kind, year, name
// Функція повинна повернути розмітку HTML:
{
  /* <li class="petCard">
<h2>Name Year</h2>
<p>Тваринка Kind - Year рік народження. Вік творини - Years років.</p>
</li> */
}
// вірахувати вік тварини і якщо старше 1 року років інакше додаємо рік
// Створити новий нумерований список із класом pets
// Створити 4 картки для тварин, використовуючи функцію generatePetCard
// Розмістити ці 4 картки у список з класом pets

// Розмістити список з класом pets на сторінку  DOM - в DIV с класом container

// Додати кнопку Видалити  на кожну картку тварини

import { generatePetCard } from "./generateCards.js";
import { deleteCard } from "./deleteCard.js";
import { petsList } from "./pets.js";
import { refs } from "./refs.js";

const olHtml = document.createElement("ol");
olHtml.classList.add("pets");

const petsCard = petsList.reduce((acc, { kind, year, name }) => {
  acc += generatePetCard(kind, year, name);
  return acc;
}, "");

refs.container.appendChild(olHtml);
olHtml.insertAdjacentHTML("beforeend", petsCard);

olHtml.addEventListener("click", deleteCard);
