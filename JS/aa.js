//註解 comment
//變數 variable

// 判段單數

// const number = 5;

// if (number % 2 != 0) {
//   console.log(number + "是單數");
// } else {
//   console.log(number + "是雙數");
// }

// let i;

// for (let i = 0; i < 10; i++) {
//   console.log("hello");
// }

// console.log(i);
// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i = i++;
// }

//九九乘法表

// for (let i = 1; i < 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     console.log(i + " x " + j + " = " + i * j);
//   }
// }
// for (let i = 1; i < 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     const result = " ${i} x ${j} =${i*j} ";
//     console.log(result);
//   }
// }

// for (i = 0; i < 6; i++) {
//   console.log("*".repeat(i));
// }

//星星樹

//for (i = 1; i < 6; i++) {
//   console.log(" ".repeat(5-i) + "*".repeat(i * 2 - 1));
// }

// function sayHelloTo(someone = "john") {
//   console.log(someone);
// }

// sayHelloTo();
// sayHelloTo("cc");

// function pay() {
//   const price = 50;
//   const change = n - price;

//   return change;
// }

function calcBMI(height, weight) {
  const h = height / 100;
  const result = weight / (h * h);
  return result;
}

const bmi = calcBMI(170, 64);
console.log(bmi);
