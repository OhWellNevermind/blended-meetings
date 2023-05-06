// Доданий рядок із символів і "abce".
// Перевірте що першим символом є літера "a".
// Якщо так, повертаємо ВІРНО, якщо ні НЕВІРНО.

let str = prompt("enter Any String").toLowerCase();
let simbol = prompt("shecken letor").toLowerCase();
let first = str.slice(0, 1);
first === simbol
  ? alert(`ВІРНО Ваш рядок ${str} ваша літера ${simbol}`)
  : alert(`НЕВІРНО Ваш рядок ${str} ваша літера ${simbol}`);

str[0] !== simbol
  ? alert(`НЕВІРНО Ваш рядок ${str} ваша літера ${simbol}`)
  : alert(`ВІРНО Ваш рядок ${str} ваша літера ${simbol}`);





    
