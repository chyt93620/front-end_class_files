// function createCounters() {
//   const counters = [];

//   for (let i = 0; i < 3; i++) {
//     counters.push(() => i);
//   }
//   return counters;
// }
// const [a, b, c] = createCounters();

// console.log(a(), b(), c());

// console.log(0.1 + 0.2);

const obj = {
  name: "Bucky",
  greet() {
    console.log(this.name);
  },
};

console.log(obj.greet);
