console.log ( 7 / 0 );
//infinito ?
//na matemática, quando se divide um numero 
// por um numero menor que ele.
// o resultado é grande
//e quanto mais proximo esse num menor for de 0
// maior será.

console.log("10" / 2);
//como dividiu um string por 2? 
// ele mesmo converte a string em valor númerico

console.log('Show' * 2);
//show não é um numero!
//toda vez que aparecer NaN é porque
//o javascript reconheceu
//que tal dado não é um número!

console.log(0.1 + 0.7);
//javascript as vezes geram imprecisões de 
//numeros flutuantes.
const somaFlutuantes = 0.1 + 0.7;
console.log(somaFlutuantes.toFixed(2));
//agora sim ! rsrs

//outros cuidados!
//console.log(10.34543543543.toFixed(2));
//isso eu consigo fazer!
console.log(10.34543543543.toString());
//isso também!
//console.log(10.toFixed());
//isso é óbvio que não! Já que eu apresentei
// um número inteiro, e não um flutuante!

//console.log(10.toString());
//eu não consigo chamar um literal dentro desse jeito
//preciso por em um () ou 10.34534;


