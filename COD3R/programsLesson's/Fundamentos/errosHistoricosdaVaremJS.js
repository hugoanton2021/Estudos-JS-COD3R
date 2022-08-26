const funcs = [];
 
for (var i = 0; i < 10; i++){
  funcs.push(function(){
    console.log(i);
  })
}

funcs[2]()
funcs [8] ()

/**
 * criei um array
 * e criei um for
 * dentro desse for, enquanto i for menor que 10
 * ele vai adicionar um novo indice no array
 * e esse indice vai receber uma função
 * que vai me imprimir o valor de i
 * 
 * enquanto for verdadeiro, vai ficar no loop
 * quando for falso, sai do loop e i vale 10.
 * pois 10 é o numero necessario para dar false
 * 
 * se eu chamar meu array que só tem um
 * indice, que é uma função
 * 
 * no indice 2 do loop
 * ele vai chamar aquilo que está por ultimo
 * que é o false, o i = 10.
 * então, qualquer indice que eu for dar
 * no meu array/func, vai imprimir 10.
 * porque var não tem escopo de bloco.
 * pois só daria diferente de 10
 * se var acessase o escopo de bloco
 * mas como não acessa, o codigo busca
 * aquilo mais perto
 * que é o valor fora do bloco/ loop
 * que é o 10, porque é false.
 */

// .PUSH add um indice em array.

  









//E COM LET?
const funcs2 = [];
 
for (let i = 0; i < 10; i++){
  funcs2.push(function(){
    console.log(i);
  })
}

funcs2[2]()
funcs2 [8] ()

//chamou 2 e 8, porque?
//porque o let tem escopo de bloco
//então ela é individual naquele bloco
//logo quando chama-la vou acessa-la
//dentro do bloco
//então, toda posicao que eu chamar ela vai vir
//igual.
