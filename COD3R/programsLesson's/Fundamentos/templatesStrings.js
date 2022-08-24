//o template ajuda na concatenação!

const nome = "Hugo"; 
const concatenacao = 'olá ' + nome + " ! ";
console.log(concatenacao);
//como fazer?
// só usar crase!
const template = ` Olá ${nome}! `;
console.log(template);

// o `` era o que eu não estava conseguindo fazer
//na aula do javascript! kkkk
// também suporta quebra de linha!

const templateDois= `Ola, 
Eu me chamo : 
${nome}`;
console.log(templateDois);


console.log (`5*5 = ${5 * 5}`);
// não necessariamente o ${} precisa ser
// uma variável
//pode ser essas expressão também!
//posso chamar funçoes também!
 const up = texto => texto.toUpperCase();
 console.log (`Ei...${up("cuidado!")}!`);
 
