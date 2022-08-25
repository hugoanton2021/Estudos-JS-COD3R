for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i);

/**
 * Vão aparecer valores
 * diferentes em cada
 *porque ?
 porque a var só fica no loop
 enquanto a expressão for 
 verdadeira
 0 < 10 V
 1 < 10 V
 2 < 10 V
 3 < 10 V
 4 < 10 V
 5 < 10 V
 6 < 10 V
 7 < 10 V
 8 < 10 V
 9 < 10 V

a partir do momento
em que for false
o i sai do loop
ou seja, é adicionado +1 no i
e ele fica com 10
se desse v ele ficaria no loop
mas como deu false, ele sai
mas continua valendo 10!
por causa do i++

10> 10 f

dentro do loop = i= 123456789
fora do loop = i = 10.

 */
