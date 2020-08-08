// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const country = "Country";
const selectElement = document.querySelector("select");
function getValue(event) {
  const value = event.target.value;
  localStorage.setItem(country, value);
  // const result = localStorage.getItem(country);
  console.log("hi");
}

function init() {
  selectElement.addEventListener("change", getValue);
}

init();
