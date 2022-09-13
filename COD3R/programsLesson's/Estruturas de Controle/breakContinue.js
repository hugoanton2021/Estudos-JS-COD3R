const breakContinue = () =>{
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  for(x in nums){
    if (x == 5){
      break
    }
    console.log(`${x}, ${nums[x]}`);
  }
}


breakContinue();

const continueBreak = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (x in nums){
    if(x == 5){
      continue
    }
    console.log(`${x} = ${nums[x]}`)
  }

}
continueBreak();


//break e if não estão atrelados e bloco de códigos
//e sim á estrutura de repetição mais proxima a eles
//o break sai do laço do condição
//o continue sai do laço na condição dada e volta no próximo
//4, 5 , 6, continue 8 , 9 ,10
//recaptulando, no in o x com array sempre recebe o indice
//e não o valor
//no caso, para mostrar o valor
//teria que fazer o array receber ele
//eai vai somando +1 nele e ir pulando de indices e array's

const continueBreakTwo= () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i != 5; i++)
     {
      console.log(`O numero é :${nums[i]}`);
      if (i == 5){
        break
        
        
      }
     }

  }

continueBreakTwo();

