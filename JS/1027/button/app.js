const d = document.createElement("div");
d.id = "ss";
d.className = "ccc ddd eee";
d.textContent = "123";

d.classList.add("aaa");
d.classList.add("bbb");
d.classList.remove("ddd");
d.classList.remove("eee");

console.log(d);
console.log(d.classList);

// const body = document.querySelector("body");
// // body.appendChild(d);
// const addBtn = document.querySelector("#addBtn");
// addBtn.addEventListener("click", () => {
//   body.appendChild(d);
// });

//---------------------

const btn = document.querySelector("#btn");
const title = document.querySelector("#title");
const btn2 = document.querySelector("#btn2");

btn.addEventListener("click", () => {
  if (title.className == "red") {
    title.classList.remove("red");
    title.classList.add("blue");
  } else {
    title.classList.remove("blue");
    title.classList.add("red");
  }
});

btn2.addEventListener("click", () => {
  title.classList.toggle("hidden");

  //一樣的效果

  //   if (title.classList.contains("hidden")) {
  //     title.classList.remove("hidden");
  //   } else {
  //     title.classList.add("hidden");
  //   }
});

//---------------------

const body = document.querySelector("body");
const ul = document.createElement("ul");

const addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", () => {
  for (let i = 1; i < 11; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    ul.appendChild(li);
  }

  body.appendChild(ul);
});

axios.get(url).then((resp) => {
  console.log(resp.data);
});

axios.get(url).then(({ data }) => {
  console.log(data);
});

//--------
axios.get(url).then((resp) => {
  const { data } = resp;

  console.log(data);
});