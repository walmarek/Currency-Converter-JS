{
  console.log("Hello All. Just started developing");

  const formElement = document.querySelector(".js-form");
  const inputElement = document.querySelector(".js-form-fieldInput");
  const outputElement = document.querySelector(".js-form-fieldOutput");
  const inputCurrencyRate = inputCurrenyElement.value;
  const outputCurrencyRate = outputCurrenyElement.value;
  const inputAmount = inputElement.value;

  formElement.addEventListener("input", () => {
    const inputCurrenyElement = document.querySelector(
      ".js-select-currencyInput"
    );
    const outputCurrenyElement = document.querySelector(
      ".js-select-currencyOutput"
    );
  });

  const calculateResult = (amount, inputRate, outputRate) => {
    return (amount * inputRate) / outputRate;
  };

  const result = calculateResult(
    inputAmount,
    inputCurrencyRate,
    outputCurrencyRate
  );

  outputElement.value = result.toFixed(2);
};