// class HeroCreator {
//   //建構子
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   attack() {
//     console.log("Attack!");
//   }
// }

// const h1 = new HeroCreator("cc","18");
// console.log(h1);

// class 靈長目 {
//   握() {}
// }

// //繼承

// class 人 extends 靈長目 {}
// class 人 extends 靈長目 {}

// const me = new 人();
// me.握();
// const monkey = new 猩();
// monkey.握();

//this 代名詞
//1. 誰呼叫誰是this ; 沒人呼叫，this = 全域變數(window/global)
//JS的this跟寫在哪無關，只跟怎麼被執行有關
//2.是否有使用「箭頭函數」(箭頭函數沒有 arguments, this)
//3.是否有使用「new」
//4.是否有使用「apply」「call」「bind」
//5.是否有開啟「嚴格模式(Strict Mode)」
//<--this

//5-----------------------------

// "use strict";

// function hi() {
//   console.log(this);
// }

// hi();

//4-----------------------------

// const hero = {
//   name: "cc",
//   age: "18",
//   attack: function (x, y) {
//     console.log(this);
//     console.log(x, y);
//   },
// };

// const a = "a";
// const b = "b";

// hero.attack.call([1, 2, 3, 4], a, b);
// hero.attack.apply([1, 2, 3, 4], [a, b]);

//3-----------------------------

// function hi() {
//   // this ->{}
//   console.log(this);
// }

// hi();

//2-----------------------------
// const hero = {
//   name: "cc",
//   age: "18",
//   attack: () => {
//     console.log(this);
//   },
// };

// function hi() {
//   console.log(arguments);
// }

//1------------------------------

// hi(1, 2, 3, 4);

// function hi() {
//   function hey() {
//     console.log(this);
//   }
//   hey();
// }

// hi();

// const hero = {
//   name: "cc",
//   age: "18",
//   attack: function () {
//     console.log(this);
//   },
// };
// hero.attack()
