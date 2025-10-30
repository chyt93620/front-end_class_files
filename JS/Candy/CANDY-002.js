// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

const chars1 = ["a", "b", "c", "d", "f", "g"];
const chars2 = ["O", "Q", "R", "S"];

// const a = chars1[0]
//   console.log(a.charCodeAt(0));

function missingChar(chars) {
  for (i = 0; i < chars.length - 1; i++) {
    const front = chars[i];
    const back = chars[i + 1];

    const frontNum = front.charCodeAt(0);
    const backNum = back.charCodeAt(0);

    if (backNum - frontNum > 1) {
      const charsNo = frontNum + 1;
      return String.fromCharCode(charsNo);
    }
  }
}

console.log(missingChar(chars1)); // 印出 e
console.log(missingChar(chars2)); // 印出 P

// 提示：
// 可使用字串的 charCodeAt 方法...
