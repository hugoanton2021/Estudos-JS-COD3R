//agrupar valores
//em indices
//e acessa-los por indice tbm
const valores = [7.7, 8.8, 9.9, 10.1];
console.log(valores[0], valores[3]);
//1
console.log(valores[4]);
//em qualquer outra
//linguagem
//isso daria erro!
// mas no .Js dá undefined
// e como adicionar
//valores a indices
//não criados?

valores[4] = 5.58;
console.log(valores[4]);
//**passar para explicações
//para chamar o array todo
//basta chamar só ele
console.log(valores);
//a quantidade por .length

console.log(valores.length);
//. push é para adicionar um novo valor
//.pop vai retirar o ultimo do array
//e me retornar ele
console.log(valores.pop());

//e para remover o indice
//que eu quero
//será delete antes do array

delete valores[0];
console.log(valores);
//"empty item"

//o array é udo tipo objeto

console.log(typeof valores);
//2
