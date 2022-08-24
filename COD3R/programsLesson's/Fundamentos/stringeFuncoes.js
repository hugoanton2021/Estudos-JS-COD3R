//é uma cadeia de caracteres!
// simbolos : "" ''  ´ ´
//FUNCOES
const ESCOLA = "cod3r";
console.log (ESCOLA);
console.log (ESCOLA.charAt(4));
//.chartAt() me da o caractere que está]
//no indice nomeado.
//no caso, o caractere do indice 4 será = r
console.log (ESCOLA.charAt(5));
//deu nulo!
console.log (ESCOLA.charCodeAt(3));
// valor doindice 3 na tabela ascii

console.log (ESCOLA.indexOf("o"));
//me dará o indice que o caractere o está 
//inserido 
// o é 01.

console.log (ESCOLA.substring(1));
//vai mostrar apenas a partir do indice 1
//e apagar o restante!
//ficará od3r
console.log (ESCOLA.substring(0 , 3));
//só mostrará a partir do 0 e antes do 3
// 0 1 2
// cod 
//*indice zero até o 3 sem incluir o 3 !

console.log ("Escola".concat(ESCOLA).concat("!"));
//concatenação;

console.log (ESCOLA.replace(3, 'e'));
//substitui os caracteres por outros
//obs: ou numeros por letras, não sei!

console.log ("Ana, Pedro, Zé".split(','));
//transforma essas strings em arrays!
// o valor dentro do () é para escolher
//o que vou querer como separador!

console.log (ESCOLA);
console.log (ESCOLA);
