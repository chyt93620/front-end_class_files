// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

// let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

// function moveZerosToEnd(arr) {
//   const zero = arr.filter(function (n) {
//     return n === 0;
//   });

//   const noZero = arr.filter(function (n) {
//     return (n !== 0);
//   });

//   return noZero.concat(zero);
// }

// let result = moveZerosToEnd(list);
// console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

//------------------------------------------------------
let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

function moveZerosToEnd(arr) {
  const result = arr.sort((a) => (a === 0 ? 1 : -1));
  return result;
}

let result = moveZerosToEnd(list);
console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

//--------------------------------------------------
// let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

// function moveZerosToEnd(arr) {
//   const result = arr.reduce(
//     (acc, cur) => {
//       if (cur === 0) acc.zeros.push(cur);
//       else acc.others.push(cur);
//       return acc;
//     },
//     { others: [], zeros: [] }
//   );

//   const final = [...result.others, ...result.zeros];

//   return final;
// }

// let result = moveZerosToEnd(list);
// console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]
