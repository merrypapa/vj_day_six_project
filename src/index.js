// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const country = "Country";
const selectElement = document.querySelector("select");
const countryIndex = { Korea: 1, Greece: 2, Turkey: 3, Finland: 4 };

function valueStorage(value) {
  localStorage.setItem(country, value);
}

function getValue(event) {
  const value = event.target.value;
  valueStorage(value);
}

function init() {
  const savedCountry = localStorage.getItem(country);
  if (savedCountry === null) {
    selectElement.addEventListener("change", getValue);
  } else {
    const savedIndex = countryIndex[savedCountry];
    selectElement.options.selectedIndex = savedIndex;
    selectElement.addEventListener("change", getValue);
  }
}

init();
