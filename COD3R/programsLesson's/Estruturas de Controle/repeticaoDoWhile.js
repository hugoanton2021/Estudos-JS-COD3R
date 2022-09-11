//MUITO POUCO USADA
//a diferença é que á unica estrutura
//em que a expressão/condição é depois do bloco
//ele excuta o bloco
//pelo menos uma vez
//e só depois verifica se  deve continuar ou não
//e também não preciso atribuir valor  a let contador
//pois o do faz o bloco rodar pelo uma vez independente do valor
// para só depois verificar a condição
//basta apenas criar e invokar a let

const getNumeroAleatorioEntre = (min, max) => {
  const numeroAleatorio = Math.random() * (max - min) - min;
  return Math.floor(numeroAleatorio);
}

let contador ;

do {
  contador = getNumeroAleatorioEntre(-1, 10);
  console.log(`O número gerado é : ${contador}`);
} while (contador != -1) 

/**
 * QUAL A DIFERENÇA?
 * o do vai excutar a sentença de código 
 * e vai ler a condição do while
 * e então só vai parar de excutar quando contador for -1
 * e tudo isso sem verificar o valor da let contador
 * pois ele excuta pelo menos uma vez independente do valor
 * para só depois verificar a condição e ver se deve excutar a sentença novamente
 * por isso não atribui valor a let
 * apenas criei e invokei
 * 
 * 
 * faça {
 * atribuir valor retornado na função no contador
 * exibir mensagem
 * } enquanto (contador for diferente de -1)
 * 
 * 
 * faça(bloco de codigo ) enquanto contador for diferente de menos 1
 */