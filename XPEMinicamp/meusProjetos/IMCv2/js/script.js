function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var imcRange = documento.querySelector('#imc-result-range');
  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);
  let faixas = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedImc;
}

function rangeResultImc() {
  if (imcResult <= 16 || imcResult >= 16.9) {
    imcRange = faixas[0];
  }
}

start();
