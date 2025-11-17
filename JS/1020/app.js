console.log(123);

// document.addEventListener("DOMContentLoaded", () => {
//   const d = document.querySelector("#hi");
//   console.log(d);
// });

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const div = document.querySelector("#hi");
  const currentText = div.textContent;

  if (currentText == "Hello") {
    div.textContent = "World";
  } else {
    div.textContent = "Hello";
  }
});

//-----------------------------------

const btnPlus = document.querySelector("#btnPlus");
const btnMinus = document.querySelector("#btnMinus");
const quantity = document.querySelector("#quantity");

btnPlus.addEventListener("click", () => {
  const currentValue = Number(quantity.value);
  //const currentValue = +quantity.value
  //另一種轉型寫法
  quantity.value = currentValue + 1;
});

btnMinus.addEventListener("click", () => {
  const currentValue = Number(quantity.value);
  if (currentValue > 1) {
    quantity.value = currentValue - 1;
  }
  //另一種寫法
  //Early Return
  //想表達後面的重點，把焦點放在後面那行
  //前面是檢查，降低心智負擔的寫法
  //   if (currentValue <= 1) {
  //     return;
  //   }
  //   quantity.value = currentValue - 1;
});
