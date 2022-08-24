let qualquer = "Massa";
console.log(qualquer);
console.log(typeof qualquer); // para mostrar o tipo

//string - junção de caracteres
//não significa que não tenha tipo
//tem tipo sim
//mas  eu posso mudar o tipo sem redeclarar!
qualquer = 3.141592//numero flutuante
console.log(qualquer);
console.log(typeof qualquer);
qualquer= true;//boolean
console.log(qualquer);
console.log(typeof qualquer);
/**
 * Perceba como funciona o leitor.
 * Ele está lendo de cima para baixo.
 * então, provavelmente, se eu alterar uma var
 * no final ou no meio do meu código
 * não influenciará nada no inicio do meu código
 * só daquele ponto para baixo.
 * para influenciar, eu teria que mudar do ponto antes
 * ou mudar o valor na declaração!
*/
 