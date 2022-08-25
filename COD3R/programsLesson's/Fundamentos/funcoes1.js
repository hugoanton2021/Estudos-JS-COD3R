//exemplo sem retorno e com retorno!

// a func define blocos.

//''trecho de cod que deu um nome a ele
//e que pode ser chamado a qualquer momento ''

//não necessariamente ela precisa receber
//dados/parametros
//e nem mesmo retornar dados.


//se função é o presidente do pais de js
//é essencial colocar bons nomes!



//FUNCAO SEM RETORNO
//DO MEU JEITO...RS
//QUE NÃO FOI MUITO FUNCIOONAL
//PQ ERA SO COLOCAR .TOFIXED NA OPERAÇÃO
//E A OPERACAO ENTRE () KKK
//function imprimirSoma ( num1, num2)
//{
  //const somaParametros = num1 + num2 ;
  //console.log(somaParametros.toFixed (2));

//}

//imprimirSoma(3.542 , 5.543);


//FUNCAO SEM RETORNO
//JEITO DO PROFESSOR!

//function ImprimirSoma2 (a , b)
//{
  //console.log((a + b).toFixed(2));
  //p funcionar toFixed assim
  //deixe a operacao em parenteses!
//}
//ImprimirSoma2(3.547, 7.657);


//FUNCAO COM RETORNO!
//function soma (nu1 , nu2 )
//{
 //return  nu1 + nu2 ;
//}
//console.log(soma(2.697 , 3.345).toFixed(2));


//console.log(soma(3,4));
//O RETURN N SIGNIFICA QUE VAI IMPRIMIR NA TELA
//E SIM QUE INDEPENDENTE DO QUE ESTIVER
//DENTRO DA FUNCAO
//VAI RETORNAR APENAS O QUE EU INDIQUEI...
//OU SEJA, PARA IMPRIMIR, EU TERIA QUE CHAMA-LO
//EM UM CONSOLE.LOG DEPOIS

function som2 (c , d=1)
{
  return c + d;
}
console.log(som2 (2));

//DIFERENCA
//nu2 tera valor padrão 1
//enquanto não colocarem outro nele.
//entao se eu passar só um valor só pro nu1
//e deixar nu2 sempre com um valor
//esse valor vai valer.



//JEITO DO PROFESSOR!






/// OUTRO JEITO DE FAZER QUE DESCOBRI!
//return sendo console.log...
//não é muito funcional porque 
//sempre vai retornar console.log
//e então a manipulação dos dados da func
//estariam limitadissimas.

//function soma (nu1 , nu2 )
//{
 //return console.log ((nu1 + nu2).toFixed(2) );
//}
//soma (3,7.567);