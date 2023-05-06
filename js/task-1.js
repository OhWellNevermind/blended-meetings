// 1 В змінній мін знаходиться значення від 0 до 60 влючно.
// Визначіть у яку чверть години потрапляє це число(в першу, другу, трктю, четверту)
let userInfo = prompt("Please enter your number: ");
console.log(typeof userInfo);
userInfo = Number(userInfo);
let min = 0;
let max = 60;
if (userInfo >= min && userInfo <= max/4) {
    alert(`Your number is ${userInfo} and is in first part.`)
} else if(userInfo >= max/4 + 1 && userInfo <= max/2) {
    alert(`Your number is ${userInfo} and is in second part.`)
} else if(userInfo >= max/2 + 1 && userInfo <= max/2 + max/4) {
    alert(`Your number is ${userInfo} and is in third part.`)
} else if(userInfo >= max/2 + max/4 + 1 && userInfo <= max) {
    alert(`Your number is ${userInfo} and is in fourth part.`)
} else if(isNaN(userInfo)) {
    alert(`Fooooo maaan that's not a number`);
} else {
    alert(`Please enter valid number from 0 to 60. Your number is ${userInfo}`);
}