//ARMAZENANDO FUNCAO EM VARIÁVEL
//OBS: *funcao em variável é func anonima, sem nome.

const imprimirSoma = function (a , b ) 
{
  console.log(a + b)
}
imprimirSoma(2 , 3);

//FUNCAO ARROW EM VAR

const imprimirSoma2 = (a , b ) => {
  return a + b;
}
console.log (imprimirSoma2(3 , 2));

//DIMINUIR MAIS AINDA A ARROW

//ARROW DE UMA LINHA SÓ
const subtracao = (a , b ) => a - b;
//*OBS: só se usa quando se tem apenas
//UMA sentença de código.
console.log(subtracao(5, 2));

const imprimir2 = a => console.log(a);
imprimir2(7556754);

const imprimir3 = (a , b) => console.log(a + b);

imprimir3 ( 3, 467);
