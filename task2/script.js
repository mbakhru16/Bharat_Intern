const celsiusInput = document.getElementById("celsiusInput");
const fahrenheitInput = document.getElementById("fahrenheitInput");

celsiusInput.addEventListener("input", convertCelsiusToFahrenheit);
fahrenheitInput.addEventListener("input", convertFahrenheitToCelsius);

function convertCelsiusToFahrenheit() {
  const celsiusValue = parseFloat(celsiusInput.value);
  if (!isNaN(celsiusValue)) {
    const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
    fahrenheitInput.value = fahrenheitValue.toFixed(2);
  } else {
    fahrenheitInput.value = "";
  }
}

function convertFahrenheitToCelsius() {
  const fahrenheitValue = parseFloat(fahrenheitInput.value);
  if (!isNaN(fahrenheitValue)) {
    const celsiusValue = (fahrenheitValue - 32) * 5 / 9;
    celsiusInput.value = celsiusValue.toFixed(2);
  } else {
    celsiusInput.value = "";
  }
}
