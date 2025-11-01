// 編號：CANDY-006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值

function findDifferent(numbers) {
  return numbers.filter(function (n) {
    if (numbers[0] === numbers[1]) {
      return n !== numbers[0];
    } else if (numbers[1] === numbers[2]) {
      return n !== numbers[1];
    }
  });
  //比較第1跟第2，如果一樣就拿來找不同
  //比較第2跟第3，如果一樣就拿來找不同
  //只適用全部只有1個不同
}

console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
console.log(findDifferent([2, 2, 2, 4, 2, 2])); // 印出 4
console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8
