
/**
 * O for In é muito pouco utilizado também
 * mas, é interessante.
 * in = dentro, em
 * logo, a estrutura do for in já é toda pronta
 * para que a contadora já fique dentro do seu array ou seu objeto
 * SÓ QUE ela acessará automaticamente APENAS os indices do seu array
 * e os atributos de seu objeto
 * não acessará automaticamente os valores
 * para isso terá de coloca-la dentro deles
 * não tem relacional
 * e só repetira dentro do proprio objeto ou array, ou seja
 * dentro do seus limites
 * então é uma repetição contada e finita
 * assim:
 */

const forIn = () => {
  const dados = [1, 2, 3, 4, 5];
  for (i in dados) {
    console.log (i , dados[i]);
  } 


}


forIn()
/**
 * i recebe  indice de array
 * repita i até que ele passe por todos os indices do array
 * e os mostre, mostrando valor do i(indice) e  valores dos indices (array recebe i)
 */

const forInTwo = () => {
  const pessoa = {
    nome: "Ana",
    idade: 23,
    peso: 76.80,
    }


  for (i in pessoa) {
    console.log(`${i} = ${pessoa[i]}`);
  }
}

forInTwo();

/**
 * i recebe  atributo de objeto
 * repita i até que ele passe por todos os atributos do objt
 * e os mostre, mostrando valor do i(atributos) e  valores dos atributos (objt recebe i)
teste githubdestkp 
*/
