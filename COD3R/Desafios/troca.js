let a = 7;
let b = 94;

a = 94;
b = 7;

console.log(a);
console.log(b);





/**
 * FORMULA MAIS FÁCIL
 * [a , b] = [b , a];
 */









/**
 * porque que
 * a = b;
 * b = a;
 * 
 * não daria certo ?
 * porque
 * a (7) = b (94);
 * a= 94
 * b(94) = a (94);
 * a e b = 94;
 * 
 * a mudou para o valor de b
 * b não mudou 
 * logo, a e b tem o msm valor
 */

/**
 * JEITO DO PROFESSOR:
 * temp = a
 * a = b
 * b = temp
 * temp (0) = a(7)
 * temp= 7;
 * a (7) = b (94);
 * a= 94;
 * b continua= 94;
 * b(94) = temp (7);
 * b = 7 ;
 * a = 94;
 * 
 *TEMP guardou o valor antigo de a
  b passou seu valor pra a
  a ficou com o valor de b
  temp passou seu valor pra b
  b ficou com o valor de temp

  ou seja, temp serviu para guardar o valor de a
  forçar b dar o seu valor a A, atualizando A
  e deu o valor antigo de a para b

 */