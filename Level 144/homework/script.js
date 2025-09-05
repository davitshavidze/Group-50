
const btn = document.getElementById("btn")
const p = document.getElementById("par")

btn.addEventListener("click", () => {
  console.log("Hello <3 ")
  p.innerText = "Hello <3"
})