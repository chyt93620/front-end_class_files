// // import { aa , xyz } from "./a.js";
// const aa = 123;
// console.log(ccc); // console.log(aa);
// console.log(xyz);

function heroCreator(name, age) {
  //1.const this--->{  }
  //2.this.__proto__ = heroCreator.prototype
  this.name = name;
  this.age = age;
  //3.return this --->{  }
}

heroCreator.prototype = {
  attack: function () {
    console.log("Attack!");
  },
};

const h1 = new heroCreator("cc", 18);
