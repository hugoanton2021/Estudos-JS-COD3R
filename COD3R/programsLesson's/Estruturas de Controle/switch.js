// **
//  * EXPLICAR O SWITCH
//  * o switch não é relacional.
//  * ou seja, ele não funciona como o if 
//  * que é assim :
//  * Se x for true execute uma sentença de código
//  * se não, não excute
//  * o Switch funciona assim :
//  * caso x for isso excute isso
//  * desse jeito, terá sempre que colocar um break
//  * dentro do switch
//  * se não ele rodará todas as sentenças abaixo.
//  * deve colocar o case, porém, sempre enunciando ele
//  * da maneira que quiser
//  * pode ser
//  * case 10:
//  * case 9 :
//  * console.log
//  * ou, 
//  * case 10:
//  * console.log
//  * case 9:
//  * console.log
//  * 
//  * e sempre terminar com default no final
//  * que seria o "else"
//  * switch não recebe true ou false como argumento, só o parametro
//e retorna depois a condição 
//  *





const imprimirResultado = (nota) => {
  switch (Math.floor(nota)){
    case 10:
    case 9 :
    console.log("Quadro de Honra!!!");
      break;

    case 8: case 7:
    console.log("Aprovado!!");
      break;

    case 6: case 5:
    console.log("Recuperação!");
      break;

    case 4:
    case 3:
    console.log("Reprovado!");
      break;

    case 2:
    console.log ("Advertência!!");
      break;

    case 1 : case 0 :
      console.log("Repetiu de ano!!!");
      break;

      default:
        console.log("Número Inválido");


  }
}

imprimirResultado(10);
imprimirResultado(9);
imprimirResultado(7);
imprimirResultado(5);
imprimirResultado(3);
imprimirResultado(2);
imprimirResultado(1);
imprimirResultado(2456);


imprimirResultado(2.5);
imprimirResultado(2.8);
imprimirResultado(2.3);
imprimirResultado("abc");

/**
 * O QUE MEU CÓDIGO FEZ?
 * Criei uma função que recebe um parametro chamado nota
 * e uso ela em meu switch
 * switch(nota)
 * mas, usei uma função para que nota seja sempre
 * arredondada para baixo
 * switch(Math.floor(nota))
 * Decidi que 10, 9 seria honra
 * 8 7 passou
 * 6 5 recuperação
 * 4 3 reprovou
 * 2 advertência
 * 1 repetiu de ano
 *Para passar essas condições ao switch fiz o seguinte
 
 switch (Math.floor(nota)) {
  case 10: 
  case 9:
    console.log("Quadro de honras")
    break;
 }

 (caso for 10 ou 9 imprima esse texto
  e PARE);

 O break é importante para parar de ler o código alí
 se não, ele continua a ler
 pois não executa true or false
 e o else, no caso, seria o default
 para definir número inválidos
 default: 
 console.log("Números inválidos")
 */