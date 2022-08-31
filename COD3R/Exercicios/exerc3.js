function salarioPorHora(horas, salario) {
  const totalReceber = horas * salario;
  return console.log(`O Salário total é igual á ${totalReceber}`);
}

salarioPorHora(150, 40.5);
//3
const salarioMensal = (horas, salario) => {
  const salarioBruto = horas * salario;
  const salarioLiq = salarioBruto - (salarioBruto * 30) / 100;
  return salarioLiq;
};

console.log(salarioMensal(180, 60));
//30% do salario brut é
//ele menos ele mesmo("2")
//onde ele mesmo("2") é multiplicado por 30/100
//mesmo que minha função retorne um variável
//eu devo chamar pelo nome dela, não pelo nome da variável
//eu fiz isso
//e deu erro, porque const só existe nesse escopo
