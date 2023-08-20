import bisiesto from "./bisiesto";




const first = document.querySelector("#primer-numero");
const form = document.querySelector("#bisiesto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const verifi = new bisiesto();

  div.innerHTML = "<b>"  + "<p>" + verifi.verificarBisiesto(first.value) + "</p>"  + "</>";
});