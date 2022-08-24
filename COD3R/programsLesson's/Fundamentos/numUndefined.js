let valor //vazia sem inicializar
console.log(valor);
//undefined porque não atribui nada

valor = null // ausência de valor
console.log(null)

//Undefined - > sem inicializar, quase n existe
//Null - > não aponta ou nem copia a nenhum valor
// Quando programar, quando quiser tirar
//o valor de uma variável
//e que ela não aponte a mais nenhum dado
//prefira atribuir o valor NULL
//ao invés de apagar ou remover o valor dela
//ou até criar ela sem valor algum.

//OBVIEDADES:
// nunca acesse algo de valor nulo
//se não dá TYPERROR

//console.log(valor.toString());

//perceba que não da erro antes e nem aponta
//erro na sintaxe
//mas dará erro!

const produto = {};
console.log(produto.preco);
//Também dá undefined e não nulo
//porque não defini endereço..
//Mas não da erro, porque estou acessando
//atributo (preco) de algo que já foi criado 
//ou definido.
//mas se eu fazer

//console.log(produto.preco.precoAvista);

//Ai ele dará typeerror
//justamente porque esto querendo acessar
//não só um atributo não criado
//mas estou querendo acessar um atributo não criado
//dentro . de outro atributo não criado kk
//atributo, dado, codigo, var, tanto faz!

// e se eu acessar apenas o produto ?
//vai dar {}
//pois não vai dar undefined
//pois porque ele é criado
//e nem erro porque ele é criado ! kkk
//é diferente de um dado primitivo.

console.log(produto);

//definir objeto dinamicamente

produto.preco = 3.50;

console.log(produto);
//me da todos os atributos

console.log(produto.preco);
//só o valor do atributo que puxei!


