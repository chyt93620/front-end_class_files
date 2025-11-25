const hero = {
  name: "cc",
  age: 18,
};

console.log(hero);
console.log(JSON.stringify(hero));



// const hero = {
//   name: "cc",
//   age: 18,
// };

// localStorage.setItem("aa", hero);
// //這樣寫會變[object Object]

// localStorage.setItem("aa", JSON.stringify(hero));
// //這樣才會保留原資訊

// const result = localStorage.getItem("aa");
// const data = JSON.parse(result);

// console.log(data);