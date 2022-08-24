const PESO1 = 1.0;
//ou
const PESO2= Number('2.0');

console.log(PESO1, PESO2);
console.log(Number.isInteger(PESO1));
//o número peso1 é inteiro ?
//vai retornar t ou false

console.log(Number.isInteger(PESO2));

// os dois deram true mesmo sendo numeros
//com pontos?
//sim, porque terminam com 0!
//se eu colocar outro número no quebrado
//além de 0, ele dará false!

const PESO3 = 1.3;
const PESO4 = Number("3.4");
console.log(Number.isInteger(PESO3));
console.log(Number.isInteger(PESO4));
//FALSE!!!

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * PESO1 + avaliacao2 * PESO2;
const media = total / (PESO1 + PESO2 );
 
console.log(media.toFixed(2));
//to.Fixed () mostra a quantidade de
//casas decimais que eu quero que imprima!

console.log(media.toString());
// para ----mostrar---- um inteiro em string
//ou seja, sequência de caracteres
//basta usar .toString()
//e se eu quiser 
//transformar média, que é string, em num bin?
//lembrando que num bin tbm é uma junção de caracteres
//basta colocar 2 como valor.
console.log(media.toString(2));



