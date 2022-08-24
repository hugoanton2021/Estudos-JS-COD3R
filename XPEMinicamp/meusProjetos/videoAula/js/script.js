function start() {
  let buttonCalculateImc = document.querySelector('#calculate-imc');
  //criei uma variavel e chamei para valor dela o button
  //como ? Criando um id no button e chamando ele através do document.querySelector
  //dai coloquei o # + nome da id do button
  buttonCalculateImc = addEventListener('click', handleButtonClick);
  //quando clicar  ouvirei o click
  //e além disso, quando clicar, acione a função handleButtonClick
  handleButtonClick();
}
function calculatingIMC(weight, heigth) {
  //const imc = weight / (heigth * heigth);
  //return imc;
  //OU
  return weight / (heigth * heigth);
}

function handleButtonClick() {
  let inputWeight = document.querySelector('#input-weight');
  let inputHeight = document.querySelector('#input-height');
  // console.log(inputWeigth);
  //console.log(inputHeigth);
  let imcResult = document.querySelector('#imc-result');
  let imcRange = document.querySelector('#range');
  let resultRange = imcRange;
  faixas = ['a', 'b'];
  //selecionou o código todo e eu quero só o valor
  //basta fazer
  let weight = Number(inputWeight.value);
  let height = Number(inputHeight.value);
  //transformar string em number
  const imc = calculatingIMC(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');
  imcResult.textContent = formattedImc;

  //criei uma var imc para receber o calc
  //criei uma var para formatar o imc
  //criei um var para receber o imc formatado
  if (formattedImc >= 16 || formattedImc <= 17) {
    resultRange = faixas[0];
  }
}

start();
//return array cada item
