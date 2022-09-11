//Fazendo a mesma lógica com while e for
// para vermos a diferença.


let i  = 1;
while ( i < 10) {
  
  console.log(`o Número é : ${i}`);
  i++;
  }

 /**
  * enquato i (1) for menor que dez exiba essa mensagem
 vai contar do 1 (valor atual da let) até 9, pois a partir do momento
 que chega a 10, ele sai do laço.
 Exibe o valor 1
 adiciona mais 1 = 2
 exibe o valor 2
 adiciona mais 1
 exibe 3


 se eu colocasse o i++ antes do console, começaria do 2 e acabaria no 9
 adiciona +1 no  valor 1
 exibe 2
 adiciona +1 no valor 2
 exibe 3
 adiciona +1 no valor 3
 exibe 4
 adiciona+1 no valor 4
 exibe 5
 adiciona +1 no valor 5
 exibe 6
 adiciona +1 no valor 6
 exibe 7
 adiciona +1 no valor 7
 exibe 8
 adiciona +1 no valor 8
 exibe nove
 adiciona+1 no valor 9
 para de executa

  */

 for (i = 1; i < 10; i++ ) {
    console.log(`O  novo número é ${i}`);
 }

/**O for faz a mesma coisa que o while
 * com a diferença que é mais limpo, mais organizado e mais legível
 * e não preciso criar variável fora dele ou dentro do bloco de codigo
 * a propria argumentação dele já inclui a variável contadora como base
 * (enquanto 1 for menor que 10 adicione mais um e exiba essa mensagem)
 * E SE EU FAZER COM A CONTADORA ANTES DE TODOS?
 * ASSIM
 * 
 * for (i++; i = 1; i < 10 ) {
    console.log(`O  novo número é ${i}`);
 }

 o for vai rodar infinitamente, porque?
 porque o js lê da esquerda pra direita
 então ele vai ignorar o i++
 como adicionar algo a algo que não foi criado antes ?
 ignorando, ele vai pular e ver que i = 1
 depois vai ler a condicional, ou seja, enquanto i for menor que 10
 então ele vai rodar infinitamente
 pois 1 sempre vai ser menor que 10.
(adicione um a algo que não existe(ignore)e enquanto 1 for menor que 10 exiba essa mensagem (sem adicionar nada depois),ou seja, sempre exiba 1)



E SE COLOCAR O I++ NO MEIO ?
ASSIM

for (i = 1; i++; i < 10 ) {
    console.log(`O  novo número é ${i}`);
 }

 vai ignorar a condição 1 < 10
 e vai adicionar um ao valor 1  infinitamente ao mesmo tempo que roda o texto
 (adicione +1 á 1 e exiba a mensagem infinitamente)
 */

 let notas = [6.7, 7.4, 9.8, 8.1, 7.7];

 for (i =0;  i < notas.length; i++) {
    console.log(`O Indice atual do Array é : ${notas[i]}`);

 }
 console.log(`O valor sai do laço é : ${i}`);
 console.log(`Pois o Array tem apenas  ${(notas.length)} total de indice e começa a contar do 0, ou seja, 0 ate 4`);
 console.log(`Que dá exatamente 5.`)

 //se eu nao fazer o i como array
 //ele sera lido fora do bloco de código]
 //e será lido como 5, porque?
 //porque é o valor que sai do laço
 //mas se o array tem 5 indices, porque o valor que sai do laço seria 5?
 //porque o array sempre começa do 0, logo, para dar 5 indices, contará do 0 ate 4
 //logo, o valor 5 fora do bloco de código na verdade é um sexto indice.



 /** O que acontece com meu codigo  for com array ?
  * js vai ler : 
  * 
  * enquanto ( i fo menor que o numero total de indices do array adicione +1 a I, que vale 0,
  * e execute o bloco de código abaixo)
  * {
  *     exiba o array notas mas seu valor agora é o I atual na contagem que vai adicionar mais um
  * e não vai ficar 2, ou 3, mas vai pular de indice em indice.
  * 
  * }
  * o I++ em um for com array não significa que i=1 vai ficar 2, 3, 4, e sim que
  * a cada + adicionado ele vai pular um indice, ou, receber o valor dele.
  * ou seja, i = 1 equivale ao primeiro indice do array
  * I++ (i =2) equivale ao segundo indice do array
  * e assim sucessivamente.
  * 
  */