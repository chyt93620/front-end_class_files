const x = 1;

function add(a: number, b: number) {
  return a + b;
}

console.log(x);
console.log(add(1, 2));

// 陣列型別

const nums: number[] = [];

nums.push(1);
// nums.push("2");
// nums.push("a");

const name = ["Amy", "Rick", "Tom"];

name.push("Rick");
// name.push(123);

// 型別[1, 2, 3]
const arr123: [1, 2, 3] = [1, 2, 3];
arr123.push(1);

// 定義type

// type Person = {
//   name: string;
//   age: number;
//   magic?: boolean;
//   status?: "a" | "b" | "c";
// };

interface Person {
  name: string;
  age: number;
  magic?: boolean;
  status?: "a" | "b" | "c";
}

const hero: Person = {
  name: "cc",
  age: 20,
};

const mage: Person = {
  name: "dd",
  age: 30,
  status: "a",
};

console.log(hero, mage);

function hi(a: string, b: string) {
  return a + b;
}

const aa = hi("aa", "bb");

