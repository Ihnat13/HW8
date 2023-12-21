/*Реалізувати рекурсивну функцію, яка зводить число в ступінь:
Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
Ступінь передається як другий аргумент у функцію pow(num, degree).
Число і ступінь вводить юзер
Для від'ємних ступенів має рахувати (x^n = 1/x^(-n) ), для нецілих ступенів має писати помилку */

let i = 0;
let result = 1;
const userNumValue = prompt(`Введите число которое будет возведено в степень`);
const userDegreeValue = prompt(`Введите степень в которую будете возводить число `);
const isValid = userNumValue !== null && userDegreeValue !== null && !isNaN(userNumValue) && userNumValue.trim() && userDegreeValue.trim() && !isNaN(userDegreeValue) && Number.isInteger(+userDegreeValue) ? true : false

if(isValid)
  {function pow(num, degree) {
    if (degree < 0) {
      return 1 / pow(num, -degree);
    } else 
    if (degree === 0) {
      result = 1;
    } else
    if (!Number.isInteger(+degree)) {
    alert(`Степень не можеть быть дробной`);
      return undefined
    } else
    if (i < degree) {
      result = result * num;
      i++;
      pow(num, degree);
    }

    return userNumValue < 0 && userDegreeValue % 2 == 0 ? -result : result;
}
alert(pow(userNumValue, userDegreeValue));
} else {
  alert(`Error`)
}



// function pow(base, exponent) {
//   if (exponent === 0) {
//     return 1;
//   }
//   if (exponent < 0) {
//     return 1 / pow(base, -exponent);
//   }
//   // Рекурсивний випадок: base^exponent = base * base^(exponent-1)
//   return base * pow(base, exponent - 1);
// }

// // Зчитування числа та ступеня від користувача
// const base = 3;
// const exponent = -3;

// // Виведення результату
// console.log(pow(base, exponent));

// 3*(3*(3*(1)))