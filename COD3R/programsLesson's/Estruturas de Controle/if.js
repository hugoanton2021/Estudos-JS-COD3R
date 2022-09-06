const soBoaNoticia = (nota) => {
  if (nota >= 7){
    console.log(`Sua nota é ${nota} portanto, foi aprovado!`);

  }


}

soBoaNoticia(8.1);


const seForVerdadeEuFalo = (valor) => {
      if (valor)
      {
        console.log (`É Verdade...`)
      }
}

//Como retornar false?

seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo("");//sem espaço
seForVerdadeEuFalo(0);
//tudo false



//tudo verdadeiro
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(" "); //espaço
seForVerdadeEuFalo("?"); 
seForVerdadeEuFalo("3"); 
seForVerdadeEuFalo(4);
seForVerdadeEuFalo(false);
seForVerdadeEuFalo(Math.PI);
seForVerdadeEuFalo([1, 2]);
seForVerdadeEuFalo([]);//array vazio
seForVerdadeEuFalo({});//objt vazio




//o js considera automaticamente esses valores
//como true e falses
