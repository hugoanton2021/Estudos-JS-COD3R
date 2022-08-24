var a= 3;
let b = 4;

var a = 30;
//let b= 40; // isso dá erro.
//só o var pode ser redeclarada.
//o let só se muda o valor.
//então o certo seria:
var a = 300;
b= 400;
// veja que não sublinhou em vermelho a var let

//mas para ficar mais legivel, o mais perfeito
//seria assim

a = 3000;
b= 4000;
//desse jeito não estou redeclarando nenhuma
//apenas modificando o valor

/*
eu não posso fazer
const c= 5000;
c= 10000;
quanto mais constante, melhor!
só use outras se realmente tal var tem motivo
para ser mudada posteriormente!
*/ 


