// 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input) {
  const arr = input.trim().split(" "); // .split(" ")把句子拆分成單字陣列，用.trim()去掉頭尾空白

  const scores = arr.map(function (n) {
    let total = 0;
    for (let i = 0; i < n.length; i++) {
      const score = n.charCodeAt(i) - 96;
      total = score + total;
    }
    return total;
  });

  const maxScore = Math.max(...scores);
  const index = scores.indexOf(maxScore);
  return arr[index];

}

console.log(highestScoreWord("lorem ipsum dolor sit amet")); // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")); // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")); // 印出 there
