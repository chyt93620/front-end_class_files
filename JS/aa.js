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

// function calcBMI(height, weight) {
//   const h = height / 100;
//   const result = weight / (h * h);
//   return result;
// }

// const bmi = calcBMI(170, 64);
// console.log(bmi);

// //索引值
// const list = ["A", "B", "C", "D", "E"];
// console.log(list[4]);
// console.log(list[list.length - 1]); //用[長度-1]取最後一個

// const list = ["A", "B", "C", "D", "E"];
// for (i = 0; i < 5; i++) {
//   console.log(list[i]);
// }

// //list的每個元素會往function(x)裡面丟

// list.forEach(function (x) {
//   console.log(x);
// });

// const nums = [1, 2, 3, 4, 5];
// const result = [];

// for (i = 0; i < nums.length; i++) {
//   const n = nums[i];
//   result.push(n * 2);
// }

// console.log(result);

// const A = [1, 2, 3, 4, 5, 6];
// A.splice(2, 0, "c");

// console.log(A)

// const nums = [1, 2, 3, 4, 5];
// const result = nums.map(function (n) {
//   return n * 2;
// });

// console.log(result);

// const chars = ["a", "b", "c", "d", "e"];
// const doublechars = nums.map(function (n) {
//   return caches.repeat(2);
// });

// console.log(doubleChars);

// const nums = [1, 2, 3, 4, 5];
// const result = nums.map(function (n) {
//   return n % 2;
// });

//  console.log(result);

// const nums = [1, 2, 3, 4, 5];
// const result = nums.filter(function (n) {
//   return n <= 3;
// });

// console.log(result);

// const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = nums2.filter(function (n) {
//   return n -1;
// });
// console.log(result);

// const nums2 = [1, 2, 3, 4, 5];
// const result = nums2.reduce(function (累進,每回合) {
//   return 累進 + 每回合;
// });
// console.log(result);

//1-10的偶數平方的總和

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result01 = nums.filter(function (n) {
//   return n % 2 == 0;
// });

// const result02 = result01.map(function (n) {
//   return n * n;
// });

// const result03 = result02.reduce(function (a, b) {
//   return a + b;
// });

// const result03 = result02.reduce(function (a, b) {
//   return a + b;
// });

// console.log(result01);
// console.log(result02);
// console.log(result03);

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const total = nums
//   .filter(function (n) {
//     return n % 2 == 0;
//   })

//   .map(function (n) {
//     return n * n;
//   })

//   .reduce(function (a, b) {
//     return a + b;
//   });

// console.log(total);

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const total = nums
//   .filter(function (n) {
//     return n % 2 == 0;
//   })

//   .map(function (n) {
//     return n * n;
//   })

//   .reduce(function (a, b) {
//     return a + b ;
//   });

// console.log(total);

// //匿名函數
// const a = function (a,b){
// //

// }

// //箭頭函數
// const a = ( x , y ) =>{

//   //
// }

//箭頭函數V1
const a = (x, y) => {
  return 123;
};
//箭頭函數V2
const a = (x, y) => 123;
