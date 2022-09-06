 const imprimirResultado = (nota) => {
  if(nota >= 7 )
  {
    console.log(`Aprovado!, sua nota é ${nota}`);

  }
  else{
    console.log(`Sua nota é ${nota}, logo, não foi aprovado...`)
  }
  
 }

 imprimirResultado(6.5);
 imprimirResultado("Epa!");
 //se  ? não é maior que 7
 //logico que vai ser false! ahhahaha
 //só usar uma ferramenta para testar se é numb ou string
 