const objt1 = {};
objt1.nome = 'Celular Ultra Mega';
objt1.preco = 4998.96;

console.log(objt1);
objt1.altura = 45.89;
console.log(objt1);

const objt2 = {
  nome: 'camisa',
  preco: 79.9,
  //objt2.altura = blabla,
  //desse jeito não consigo
  //dentro dos colchetes
  //tem que ser assim
  altura: 1.64,
  objt: {
    objt3: 32.5,
  },
};
//sdfh
//34
//5
// no js eu posso criar
//um atributo
//fora do objeto
// ou seja, eu posso criar
//o objeto
//e depois dar a ele atributos
//separadamente
//dinamicamente
//como se tivesse
//os chamando

//mesmo depois de criado e chamado
//independente do momento
//em que eu criar
//no fim ou no meio do cód
//quando eu o chamar
// o atributo criado no final
//se juntará ao todo

// ou seja, se eu criar aqui
//chamar aqui
//criar aqui
//chamar aqui
//criar aqui
//chamar aqui
//ele sempre vai me mostrar
//inteiro
//nunca me mostrará
//apenas as partes de antes
//ou apenas a criada!

//mas se aquilo que é chamado
//antes do que eu criei
//continuará como o antigo
//pois o js le de cima p baixo
//então a ordem importa
//se eu criar x no y
//antes do x, y vai ser sempre y
//e depois disso, y vai ser sempre x y

//todo objeto é uma coleção
//de chaves e valores
//posso ter um objt dentro
//de outro objt
