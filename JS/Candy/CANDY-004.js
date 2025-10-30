// 編號：CANDY-004
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

function humanReadableTimer(seconds) {
  // 實作在這裡
  const sec = seconds % 60; //直接從餘數取得 秒數
  const hr = Math.floor(seconds / 3600); //從分鐘取得 小時
  //搜尋到Math.xxx()的方法，Math.floor(x):無條件捨去 (取小於等於)
  const min = Math.floor((seconds % 3600) / 60); // 秒數除以小時，剩餘的秒數在除60得到分鐘，去小數點

  //用String(xx)轉成字串，字串.padStart(目標長度, 補上的內容)
  const hh = String(hr).padStart(2, "0");
  const mm = String(min).padStart(2, "0");
  const ss = String(sec).padStart(2, "0");

  const time = `${hh}:${mm}:${ss}`;
  return time;
}

console.log(humanReadableTimer(0)); // 印出 00:00:00
console.log(humanReadableTimer(59)); // 印出 00:00:59
console.log(humanReadableTimer(60)); // 印出 00:01:00
console.log(humanReadableTimer(90)); // 印出 00:01:30
console.log(humanReadableTimer(3599)); // 印出 00:59:59
console.log(humanReadableTimer(3600)); // 印出 01:00:00
console.log(humanReadableTimer(45296)); // 印出 12:34:56
console.log(humanReadableTimer(86399)); // 印出 23:59:59
console.log(humanReadableTimer(86400)); // 印出 24:00:00
console.log(humanReadableTimer(359999)); // 印出 99:59:59
