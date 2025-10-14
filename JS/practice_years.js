/*   寫完丟到瀏覽器測試執行   */

let this_year = prompt("今年是西元幾年?");

if ((this_year % 4 === 0 && this_year % 100 !== 0) || this_year % 400 === 0) {
  alert(this_year + "是閏年");
} else {
  alert(this_year + "不是閏年");
}
