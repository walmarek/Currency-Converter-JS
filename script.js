let have = document.querySelector(".js-select__currencyHave");
let get = document.querySelector(".js-select__currencyGet");
let input = document.querySelector(".js-form__field--input");
let output = document.querySelector(".js-form__field--output");

let formElement = document.querySelector(".js-form");
let formFieldInput = document.querySelector(".js-form__field--outputHave");
let formFieldOutput = document.querySelector(".js-form__field--outputGet");

var select = document.getElementById("js-currencyHave");
var option = select.options[select.selectedIndex];

var select = document.getElementById("js-currencyGet");
var option = select.options[select.selectedIndex];

formElement.addEventListener("input", () => {
  let haveCurrency = have.value;
  let getCurrency = get.value;
  let inputCurrency = input.value;
  let outputCurrency = output.value;

  let outputCurrencyResult = (inputCurrency * haveCurrency) / getCurrency;

  formFieldOutput.value = outputCurrencyResult.toFixed(2);
});
