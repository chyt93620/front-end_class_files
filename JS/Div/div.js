const inner = document.querySelector("#inner");
const out = document.querySelector("#out");

out.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.currentTarget);
});

inner.addEventListener("click", () => {
  console.log("in");
});
