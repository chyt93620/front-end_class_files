// 編號：CANDY-005
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

// function squareDigits(num) {
//   const arr = [...String(num)].map(Number); //把數字轉成字串並形成陣列，再轉回數字
//   return arr
//     .map(function (n) {
//       return n * n; //平方
//     })
//     .toString() //改成字串
//     .replace(/,/g, ""); //把,替換成""(去掉逗號) ， /g代表全部都替換
// }

function squareDigits(num) {
  const arr = [...String(num)].map(Number); //把數字轉成字串並形成陣列，再轉回數字
  return arr
    .map((n) => n * n)
    .join(""); //把陣列輸出，但中間不要有逗號
}

console.log(squareDigits(3212)); // 印出 9414
console.log(squareDigits(2112)); // 印出 4114
console.log(squareDigits(387)); // 印出 96449


