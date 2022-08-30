function compras(trab1, trab2) {
  const comprarSorvete = trab1 || trab2;
  const comprarTv50 = trab1 && trab2;
  //const comprarTv32 = !!(trab1 ^ trab2);
  const comprarTv32 = trab1 != trab2;
  //ou exclusivo!, o que é?
  //toda vez que der resultado igual
  //vai retornar false.
  // v f = v
  // f v = v
  // f f = f
  // v v = f
  //pode ser simulado com diferente
  //que é !=
  //e ! sozinho  é negação
  const manterSaudavel = !comprarSorvete;
  //SE COMPRARSORVETE FOR V, ENTÃO A NEGAÇÃO É FALSE
  //LOGO, MANTERSAUDÁVEL É FALSE, LOGO, NÃO EXISTE, NÃO VAI MANTER SAUDAVEL
  //PORQUE VAI COMPRAR SORVETE
  //SE COMPRARSORVETE É FALSE, O NEGADOR VAI SER TRUE
  //LOGO, MANTERSAUDAVEL É TRUE, VAI ACONTECER
  //POIS NÃO VAI COMPRAR SORVETE, LOGO, SAUDÁVEL É VERDADEIRO.
  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
}
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(true, true));
console.log(compras(false, false));

// ESTUDAR EM CASA
