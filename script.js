console.log("Hello All. Just started developing");

const inputCurrenyElement = document.querySelector(".js-select-currencyInput");
const outputCurrenyElement = document.querySelector(".js-select-currencyOutput");
const inputElement = document.querySelector(".js-form-fieldInput");
const outputElement = document.querySelector(".js-form-fieldOutput");
const formElement = document.querySelector(".js-form");

var select = document.getElementById("js-currencyInput");
var option = select.options[select.selectedIndex];

var select = document.getElementById("js-currencyOutput");
var option = select.options[select.selectedIndex];

formElement.addEventListener("input", () => {
  const inputCurrencyRate = inputCurrenyElement.value;
  const outputCurrencyRate = outputCurrenyElement.value;
  const inputAmount = inputElement.value;

  const calculateResult = (inputAmount, inputRate, outputRate) => {
    return (inputAmount * inputRate) / outputRate;
  };

  const result = calculateResult(
    inputAmount,
    inputCurrencyRate,
    outputCurrencyRate
  );

  outputElement.value = result.toFixed(2);
});
