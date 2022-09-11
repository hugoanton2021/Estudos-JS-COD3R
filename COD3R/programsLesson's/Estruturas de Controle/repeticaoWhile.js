const getNumeroAleatorioEntre = (min, max) => {
  const valor = Math.random() * (max- min) + min;
  return Math.floor(valor);
}

let contador = 0 ;

while (contador != -1 )  {
  contador = getNumeroAleatorioEntre(-1, 10);
  console.log(`Seu número é ${contador}`)
}

console.log("Tchau tchau!");


/**
 * OBS: Math.random gera números aleatórios de 0 a 1 (0.5, 0.2, 0.3...)
 * 
 * 
 * 
 * O QUE MEU CÓDIGO FAZ?
 * Criei uma função que recebe dois parametros, min e max
 * criei uma constante que recebe o seguinte valor:
 * o valor de max - min vezes * um número aleatorio de 0 a 1
 * gerado pelo math.random (que pode ser 0.1, 0.2,  0.3)
 * mais o valor minimo!
 * logo, essa função vai valer esse resultado.
 * minha função vai retornar esse resultado arredondado
 * para baixo com math.floor
 * 
 * 
 * (toda vez que invocar essa função ela me retornará o valor
 * dessa constante, e eu posso usar em console.log
 * ou como valor de outras variáveis
 * entre outras coisas, até como valor de atributo de objeto)
 *
 * 
 * logo em seguida crio uma variável contadora com o valor 0
 * e crio um while com a seguinte lógica
 * Enquanto (a variável contadora for diferente de -1) rode isso:
 * {
 *  variável contadora recebe o valor da função anterior
 * com os parametros -1, 10
 * exiba no console o valor que irá dar.
 * 
 * no código :
 *  let contadora = 0;
 * while (contadora != -1) {
 *  contadora= getAleatorioEntre(2,8);
 * console.log(`${contadora}`);
 * }
 * 
 * 
 * 
 * 
 * O QUE ACONTECE POR BAIXO DOS PANOS ?
 * O leitor vai ignorar a função
 * e vai ler a let que vale 0
 * e depois vai ler o while
 * viu que a condição enquanto do while para iniciar é
 * a let ser diferente de -1
 * como let é 0, o js vai excecutar o while
 * então, enquanto let for diferente de -1 o js vai excecutar
 * o bloco de código
 * então, enquanto contadora for menor que -1
 * ela recebe como valor a função com os parametros 2 e 8
 * que vai retornar o valor de uma variável
 * a partir do momento que a let contadora recebe a função
 * a função excecuta, ou seja, é invokada
 * então ela vai me retornar o valor da const criada dentro dela
 * esse valor é o resultado de uma conta
 * que é a seguinte:
 * parametro1 - parametro2 vezes* math.random (num aleatorio entre
 * 0 e 1, podendo ser: 0.2, 0.1, 0.45, 0.345643, etc...)
 * mais parametro1
 * 
 * e esse valor vai ser arredondado para baixo pelo math.floor
 * exemplos de alguns resultados que podem ser retornados
 * 
 * 2 e 8 


math.random = 0 ; (sempre começa por ele na conta)

(8-2) = 6;
0 * 6 = 0 
0+ 2 = 2

 
math.randomm = 1 ; 

(8-2) = 6; 
1* 6 = 6;
6 * 2 = 8;


se for 0 sempre vai dar o mínimo

mas, pode dar 0.1, 0.2, 0.3...

se for 1 sempre vai dar o máximo


math.random = 0.4996250046384343 

0,4996250046384343 * 6 = 2,99
2,99 + 2 = 4,99 = math.floor(4.99) = 4.


vamos supor que retorne o 4.
então enquanto contador for diferente de -1 ela vai 
mudar seu valor de 0 para o valor retornado da função (que é 4)
ao mesmo tempo em que excuta ela e passa seus parametros
sendo assim, vai imprimir esse valor.

 */

