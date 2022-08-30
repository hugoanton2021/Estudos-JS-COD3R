function meses(numero) {
  if (numero == 1) {
    return console.log('Janeiro');
  } else if (numero == 2) {
    return console.log('Fevereiro');
  } else if (numero == 3) {
    return console.log('Março');
  } else if (numero == 4) {
    return console.log('Abril');
  } else if (numero == 5) {
    return console.log('Maio');
  } else if (numero == 6) {
    return console.log('Junho');
  } else if (numero == 7) {
    return console.log('Julho');
  } else if (numero == 8) {
    return console.log('Agosto');
  } else if (numero == 9) {
    return console.log('Setembro');
  } else if (numero == 10) {
    return console.log('Outubro');
  } else if (numero == 11) {
    return console.log('Novembro');
  } else if (numero == 12) {
    return console.log('Dezembro');
  }
}

meses(6);
// colocar == ao invés de =... vai saber kk

function mesesDois(numero) {
  const mapeamento = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  return console.log(mapeamento[--numero]);
}
mesesDois(2);
/**
 * como faço para que um array[] receba um valor fora de si mesmo ?
 * array [valor] ou array[valor()]
 * nese caso, array com 12 indices recebe um number
 * que vai se igualar ao numero de indice dele
 * porque -- ? Porque o array começa no 0
 * logo, por exemplo... se eu usasse num 2, o resultado seria Março e não Fevereiro
 * 0 1 2 = março
 * 1 2 = fevereiro.
 * dai tive que decrementar um com --
 */
