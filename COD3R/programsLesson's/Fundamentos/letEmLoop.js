for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i);

/**
 * LET tem escopo local
 * ou seja, de bloco
 * então, ela só é
 * visível/acessível
 * dentro do bloco
 * que foi criada.
 *
 * nesse caso, o consolelog
 * do bloco, exibirá let
 * 123456789
 * porque está dentro do bloco
 * e posso mexer na let ai
 *
 * mas, como não posso acessar
 * a let fora do bloco
 * o console.log fora do bloco
 * não irá imprimir nada.
 * dará erro!
 *
 */
