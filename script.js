{
  console.log("Hello All. Just started developing");

  const inputCurrenyElement = document.querySelector(
    ".js-select-currencyInput"
  );
  const outputCurrenyElement = document.querySelector(
    ".js-select-currencyOutput"
  );
  const inputElement = document.querySelector(".js-form-fieldInput");

  const formElement = document.querySelector(".js-form");

  formElement.addEventListener("input", () => {
    const outputElement = document.querySelector(".js-form-fieldOutput");
    const inputCurrencyRate = inputCurrenyElement.value;
    const outputCurrencyRate = outputCurrenyElement.value;
    const inputAmount = inputElement.value;

    const calculateResult = (amount, inputRate, outputRate) => {
      return (amount * inputRate) / outputRate;
    };

    const result = calculateResult(
      inputAmount,
      inputCurrencyRate,
      outputCurrencyRate
    );

    outputElement.value = result.toFixed(2);
  });
}
