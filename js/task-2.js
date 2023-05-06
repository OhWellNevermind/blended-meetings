// 2 Напишіть програму , яка запитує у користувача кількість хвилин і повертає значення годин і хвилин 70 === 01:10
let userInfo = Number(prompt('Please enter you minutes'));
if (isNaN(userInfo)) {
    alert("Ви ввели не коректні дані");
} else {
const houres = String(Math.floor(userInfo / 60)).padStart(2,0);
const minutes = String(userInfo % 60).padStart(2,0);
alert(`Ви ввели ${userInfo} що дорівнює ${houres} : ${minutes} `);
}