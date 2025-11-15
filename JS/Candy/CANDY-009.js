// 編號：CANDY-009
// 程式語言：JavaScript
// 題目：移除網址中的錨點（Anchor）

// 可讀性較高，但比較長
function removeAnchor(url) {
  const ifAnchor = url.indexOf("#");

  if (ifAnchor == -1) {
    return url;
  } else {
    return url.slice(0, ifAnchor);
  }
}

// 比較短，功能完全相同，可讀性稍低
function removeAnchor(url) {
  const ifAnchor = url.indexOf("#");
  return ifAnchor === -1 ? url : url.slice(0, ifAnchor);
}

console.log(removeAnchor("5xcampus.com")); // 印出 5xcampus.com
console.log(removeAnchor("5xcampus.com/#about")); // 印出 5xcampus.com/
console.log(removeAnchor("5xcampus.com/courses/?page=1#about")); // 印出 5xcampus.com/courses/?page=1
