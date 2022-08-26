//é um operador onde você "desestrutura" um conjunto de dados
//para pegar algum atributo/indice dele e acessa-lo 
//e utiliza-lo fora dele.


//exemplos com arrays e functions

const pessoa = {
  nome: 'Hugo',
  idade: 22,
  endereco: {
    Rua: 'Maria Sorrrentini',
    Numero: 40
  }
}

const {nome , idade} = pessoa;
console.log(nome , idade);
//A PARTIR DESSE MOMENTO
//O DESTRUCTION EXTRAIU NOME E IDADE E TRANSFORMOU EM VARIÁVEIS
//AGORA NOME E IDADE SÃO VARIÁVEIS!


//e para mudar o nome desse atributo/variável ?

const {nome : n , idade : i} = pessoa;
console.log(n , i);


// só colocar " :" apos o identificador da variavel
//e colocar o novo nome que quer depois
// nome : n
//novo nome: n


//e se tirar um atributo que não existe dentro do objt?

const { sobrenome ,  bemHumorado = null} = pessoa
console.log (sobrenome , bemHumorado);

//e sem o null ja colocado ?

const { sobrenone ,  bemHumorada} = pessoa
console.log (sobrenone , bemHumorada);

//e se eu quiser acessar logradouro e numero ?

const { endereco: {Rua, Numero}} = pessoa;

//nesse caso, não vai pegar direto de pessoa, mas sim de endereco
//mas ainda tem que referenciar pessoa
//ele não vai criar uma var endereco, só rua e numero
//só se eu chamasse apenas ela {endereco} = pessoa;

//NÃO ESQUECER DE NÃO COLOCAR ATRIBUTOS UNDEFINEDS ANTES

//const {conta: { nome, idade}} = pessoa;
console.log(nome, idade);


//vai dar erro por causa daquela regra, undefined e null
//só depois de algo que existe.
//nesse caso, nome e idade existem, mas conta não.
//o caminho tem de estar livre(sem erros, tudo criado) 
//para que só o ultimo dado seja null ou undefined.