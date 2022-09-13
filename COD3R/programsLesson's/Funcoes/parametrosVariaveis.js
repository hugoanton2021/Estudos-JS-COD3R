const soma = () => {
  let soma= 0;
  for (i in arguments){
    soma += arguments[i]
  }
  return soma
}

console.log(soma(1));

//arguments é um array interno já facil
//aqui estou passando um parametro variavel
//