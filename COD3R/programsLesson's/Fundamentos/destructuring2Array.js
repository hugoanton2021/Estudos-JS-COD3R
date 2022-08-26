//TRADICIONAL
//CRIA ARRAY E DPS CHAMA MANUAL
let x = [1, 2, 3, 4, 5];
let [z, b, y, o, p] = x;
//criei um array com 5 dados
//desestruturei os valores
//e transformei em variáveis
//com o destructuring
//para sabr qual valor do array
//vai ser acessado
//é só saber que tem de fazer
//o destructuring em ordem
//na ordem do array
//se os valores do array sao
//1234
//e as var criadas pelo destructuring
//abcd
//então a=1, b=2, c=3, d=4.
console.log(z);
console.log(b);
console.log(p);
///////////////////////////
//
//
//
//
//JEITO DINÂMICO
//no mesmo cod ja cria array e
//desestrutura criando já uma var

const [a] = [10];
console.log(a);
//Aqui eu criei uma variável a
//que vai receber o valor do
//indice 0.
//como se não tem array?
//ao mesmo tempo eu crio um array
//dentro desse mesmo codigo
//onde o indice 0 vale 10.
//então eu desestruturei o indice 0
//de um array.
//
//
//
//VARIOS DE UMA VEZ
const [n0, n1, n2, n3, n4] = [0, 1, 2, 3, 4];
console.log(n0, n1, n2, n3, n4);
//aqui ao mesmo tempo
//criei 5 variáveis
//que vão receber os valores
//dos 5 indices que criei
//no mesmo código a cima
//
//
//
//IGNORANDO ELEMENTOS E
//DANDO VALOR A ELES
//BASTA COLOCAR UMA VIRGULA VAZIA

const [n5, , n6, , n7, n8 = 567, n9] = [5, 6, 7, 8, 9];
console.log(n5, n6, n7, n8, n9);
//vai ignorar a var n5 e n6
//e acrescentar um valor diferente
//na var n8... diferente do valor
//do indice
