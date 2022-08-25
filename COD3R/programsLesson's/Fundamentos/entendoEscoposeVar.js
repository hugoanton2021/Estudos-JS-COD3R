{{{{var sera = "Será????"}}}}

console.log(sera);


/**
 *em outras linguagens uma variável
  só é acessivel/visível no escopo em que
  foi criada!
  então, não iria imprimir desse jeito
  
  apenas se console.log estivesse
  dentro do escopo que a var foi criada!


  a var no .js 
  é acessível/visível para todo mundo
  globalmente e particularmente nos escopos
  MENOS NAS FUNCOES.



 */

  const teste = () =>
  {
    var localnaFunction = 1234;

  }
  teste();

  //aqui só se chama para ativar a funcao!
  //não vai aparecer nada porque só chamei.



//console.log(localnaFunction);
//D E U   E R R O !!!!!!
//PQ É ESCOPO DENTRO DE FUNCTION!
//SE FOSSE EM OUTRO TIPO DE ESCOPO
//DARIA CERTO!

//por exemplo!

var numero = 1
{
  var numero = 2
  console.log(numero);
}
console.log(numero);

//EVITE CRIAR QLQR TIPO DE VAR EM ESCOPO GLOBAL!
//JUSTAMENTE POR CAUSA DO RISCO DE
//SUBSCREVER OS VALORES INICIAIS POR OUTROS
//DURANTE A CONSTRUCAO DE UM CODIGO
//OU SE CRIA UMA VAR NO GLOBAL
// OU DENTRO DA FUNCTION!


/////////////////////////////////////
//////////////////////////////////////
///////////////////\\\\\\\\\\\\\\\\\\

console.log ("//////////////////////////////////////////////////////////////////////////////////////////////");
