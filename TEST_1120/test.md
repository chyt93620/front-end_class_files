語意化 HTML 標籤是用能直接理解的字詞作為 HTML 的標籤，例如<header>、<footer>從單字就能看出這個區塊負責頁首、頁尾。
好處是一眼就能看出這個標籤的用途，提升可讀性，讓網頁容易維護。

【HTML】

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="test.css" />
  </head>
  <body>
    <div class="triangle"></div>
  </body>
</html>

【CSS】
.triangle {
border-top: 80px solid rgba(0, 0, 0, 0);
border-left: 60px solid #3498db;
}

// 14 題

```
function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);

  const timeString = ` ${hours}:${minutes}:${seconds}`;

  document.getElementById('clock').innerText = timeString;
}

function addZero(num) {
  if (num < 10) {
    return '0' + num;
  }
    return num;
  }

setInterval(updateClock, 1000);
```

最後遇到 setInterval(updateClock(), 1000);時間沒更新
結果是不能加括號 setInterval(updateClock, 1000)

// 15 題

第 15 題(多選題, 5 分)
下列哪些 console.log 會輸出 true？
const x = 5;
const y = "5";
const z = [1, 2, 3];
const w = z;

console.log(x == y); // (1)
console.log(x === y); // (2)
console.log(z == w); // (3)
console.log(z === [1, 2, 3]); // (4)
console.log(w === z); // (5)

true
false
true
false
true

//16 題

let a = [1, 2, 3];
let b = a;
b.push(4);

console.log(a);

[ 1, 2, 3, 4 ]

為什麼????



// 20題

function createCounters() {
  const counters = [];

  for (let i = 0; i < 3; i++) {
    counters.push(() => i);
  }
  return counters;
}
const [a, b, c] = createCounters();

console.log(a(), b(), c());

把var i = 0 改成let i = 0