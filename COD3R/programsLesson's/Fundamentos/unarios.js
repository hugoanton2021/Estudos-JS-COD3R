//os unarios são os operadores de
//incremento e decremento
let num1 = 1;
let num2 = 2;

//incremento
num1++
//decremento
num2-- // ou --num2


//diferença
//--num ++num tem prioridade na leitura do que
//num-- e num++

// só usar num++ e num--

function contrariar (valor) 
{
  const tipo = typeof valor; //1

  if (tipo === "boolean") //2
  {
    return !valor //3
  }

  else if  (tipo === "number") 
  {
    return - valor //4
  }
  else
  {
    return `Booleano ou Númerico esperado, mas o valor inserido foi ${tipo}` //5
  }

}

console.log(contrariar(true))
console.log(contrariar(3))
console.log(contrariar("bb"))

/**
 * COISAS QUE NÃO SABIA OU NÃO LEMBRAVA
 * 1- Para armazenar apenas o tipo de um valor em uma variável
 * basta declarar a variável e o valor será "typeof x"
 * 2-para comparar o valor de uma variável, devo chama-la e comparar (===) com o nome do tipo em""
 * não sei o porquê, mas já vem com "" os tipos.
 * 3-  para mostrar o valor/tipo contrario só colocar ! antes da var
 * 4- para mostrar o valor negativado, colocar - antes da var 
 * 5- ao mostrar  a var que dei o valor como sendo o tipo do numero que será digitado no console.log
 * será impresso o tipo.
 * 
 */

