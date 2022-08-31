function cumprimentar(nome) {
  return `Olá, ${nome}!`;
}

console.log(cumprimentar('hugo'));

//return não necessariamente vai imprimir na tela
//ele apenas mostra que valor vai retonrar a função quando usa-la independente de como
//1

const cumprimento = texto => {
  return `Olá, ${texto}!`;
};

console.log(cumprimento('Even Flow'));
