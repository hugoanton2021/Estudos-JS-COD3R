let isAtivo = false;
isAtivo = true;
isAtivo = 1;
//transformar um valor
//em verdadeiro
//ou falso
//basta usar o !not
// nesse caso, duas vezes
//porque o valor é int
//se fosse valor bool true
//seria uma vez só
//2
console.log(!isAtivo);
console.log(!!isAtivo);

console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-3);
console.log(!!' '); //espaço
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('os faslsos...');

console.log(!!0);
console.log(!!''); //vazia
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log(!!('' || null || 0 || '  ' || 123));
// tem que dar um verdadeiro só
//'' -false, null - false, 0 - false, ' ' - true, 123-true
//ja no ' ' me retornará true.
//se não tem nenhum true, me retornará false
//mas, se for && ao invés de || todos teriam que ser true
//para me retornar true
//se não, retornaria false.

//EXEMPLO PRÁTICO
//4
let nome = '';
console.log(nome || 'Desconhecido');
// '', sem espaço, é false
//'desconhecido' é true
//porque tem caractere
//a função diz
//"Imprima o primeiro valor
//que dê verdadeiro"
// '' é false
//'desconhecido' é verdadeiro
//logo, imprima desconhecido.
nome = 'Hugo';
console.log(nome || 'Desconhecido');
