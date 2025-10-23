// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方
const btn = document.querySelector("#btn")
const bodyHeight = document.querySelector("#bodyHeight")
const bodyWeight = document.querySelector("#bodyWeight")
const resultText = document.querySelector("#resultText")

btn.addEventListener("click", () => {
  const height = Number(bodyHeight.value) / 100
  const weight = Number(bodyWeight.value)
  const bmi = weight / (height * height)
  resultText.textContent = bmi.toFixed(2)
})
