//o leitor sempre lê de cima pra baixo!
//então para  usar um dado (var,func,array) primeiro
//você tem que ter criado ela!
//mas o hoisting permite mais ou menos o contrário.

console.log(`A var a é igual a : ${a}`);
//não declarei, mas chamei.
//vai dar "is not defined"
//mas se eu criar agora, não vai dar mais isso.
var a = 34.546;
//não deu erro! mas deu ''undefined''
//em outras linguagens isso seria proibido
//pois jamais poderia chamar algo que nao foi criado!
// mas de agora em diante, vai ler.


console.log(`A var a é igual a : ${a}`);

// o que acontece? Acontece que a var é jogada para cima de tudo
//lido primeiro.
//e no primeiro log dá undefined, ela existe mas dá undefined.
//e no primeiro a baixo da real criação de a, dá o valor certo.


// ou seja, o leitor jogou a var pra cima o declarando nula
//e depois atribui valor a ela que nós damos
//assim
/**
 * var a;
 * console.log(a);
 * a = 2;
 * console.log(a);
 */

//mas NÃO EXISTE MOTIVO para chamar uma variavel antes de criarkkkkkk

//com o let isso não ocorre
//ou seja, o leitor não vai jogar o let em cima criando ele
//e definindo ele como undefined
//para ler o log como udefined que vem 
//para só depois atribuir a let o valor que atribuimos
//e ai sim ler o valor correto
//simplesmente vai dar ERROOO kkk




