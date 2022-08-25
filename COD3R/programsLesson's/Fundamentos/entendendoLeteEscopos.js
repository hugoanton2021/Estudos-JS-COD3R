var numero = 1;
{
   let numero = 2;
   console.log(numero);
}
console.log(numero);
/**
 * Como acha que vai sair?
 * provavelmente 2 e 1.
 * porque var é global e let é local.
 * o console global só consegue acessar
 * a var global
 * e o console local só o let local
 * se fosse var ao invés de let seria 2 , 2
 *
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * OBS:  O LEITOR VAI DAR PREFERÊNCIA
 * AO ESCOPO MENOR
 * SE NÃO TIVER REFERÊNCIA AO ESCOPO MENOR
 * ELE IRA PARA O ESCOPO ANTERIOR.
 * NO NOSSO CASO, O GLOBAL.
 * ENTÃO SE EU CRIAR UM LET2 NO ESCOPO LOCAL
 * E MANDAR IMPRIMIR A LET1 QUE É GLOBAL
 * NO ESCOPO LOCAL
 * VAI IMPRIMIR
 * 
 */

let numUM = 1;

{
  let numDois = 2;
  console.log (numUM);
}
//pois lembrando que let tbm é global e local
//mas com preferência e enfase no
//escopo local/menor

console.log("//////////////////////////////////");


let num = 1;

{
  let num = 2;
  console.log (num);
}

console.log(num);

/**
 * aqui mostra outro comportamento
 * mas que também demonstra que let é global e local
 * ele vai buscar o 2 no local e depois o 1 no global.
 * 
 * RESUMINDO :
 * VAR: ESCOPO GLOBAL, FUNC
 * LET: ESCOPO GLOBAL, FUNC, BLOCO
 * (VAR ACESSA TUDO POR SER GLOBAL MAS É PART NA FUNC)
 * (LET ACESSA TUDO POR SER  GLOBAL MAS É 
 * PARTICULAR NA FUNC E PARTICULAR NO BLOCO)
 * 
 */