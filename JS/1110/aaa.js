// function hi() {
//   var a = 1;

//   function hey() {
//     console.log(a);
//   }

//   return hey();
// }

// const h = hi;

// console.log(h);

// // h();
// // console.log(a);

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

//IIFE

(function (x) {
  console.log(x);
})(123);
