const teste1 = (num) => {
  if(num > 7) 
    console.log(num);
    console.log("Final");
  
}

teste1(6);
teste1(8);

//Porque o  6 mostrou o final
//e o 8 mostrou tudo ?

//porque o if coloca com sentença propria
//de sua condição apenas aquilo
//que está logo abaixo dele
//tudo fora dele será excecutado
//independete se for true ou false
//logo, 6 que é false não vai aparecer ele mesmo
//mas vai aparecer o "final" que esta fora 
//da sentença condicional.
//8, que é true, vai rodar os dois...
//o certo, seria colocar as {}!
//nunca vi usar sem {} na verdade rs

const teste2 = (num) => {
if (num > 7);
{
   console.log(num);
}
}
teste2(6);
teste2(8);

//porque imprimiu os dois?
//por causa do ";" no final do IF
//isso faz o if ser uma sentença de código terminada
//e o bloco seguinte um novo bloco
//que não tem nenhuma ligação com o if.
//logo, será executado independente da condição do if
//pois não pertence a ele.
