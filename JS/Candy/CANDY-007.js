// 編號：CANDY-007
// 程式語言：JavaScript
// 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

function findSomeDifferent(numbers) {
  const a = numbers.map((n) => n % 2).reduce((total, n) => total + Math.abs(n));
  if (a === 1) {
    return numbers.filter((n) => n % 2 === 1);
  } else {
    return numbers.filter((n) => n % 2 === 0);
  }
}

console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])); // 印出 11
console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])); // 印出 160
