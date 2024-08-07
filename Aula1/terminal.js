// Necessita executar npm install prompt-sync

import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});

//---------------------------------------
//Exemplo 1: Conta simples
//---------------------------------------

let nome = prompt("Informe seu nome completo: ")
let notaUm = Number(prompt("Digite sua nota 1: "));
let notaDois = Number(prompt("Digite sua nota 2: "));
let notaTrês = Number(prompt("Digite sua nota 3: "));

let media = (notaUm + notaDois + notaTrês)/3;
console.log(`Olá, ${nome}!! Sua nota final foi ${media}.`);

//--------------------------------------
// Exercício: Escrever um programa JavaScriopt que solicita a quantidade de sucos e sanduíches consumidos pelos clientes de uma mesa de uma lanchonete. Exiba o recibo com os valores parciais e total final a pagar conforme abaixo:

/*
Recibo:
Suco: R$ 5.2, quantidade: 15, Total: R$ 78.00
Sanduiche: R$ 12, quantidade: 5, Total: R$ 60.00
Custo total a pagar: R$ 138.00
*/
//---------------------------------------

const sucos = 5.2;
const sanduiche = 12;

let qtdSucos = Number(prompt("Informe a quantidade de sucos consumidos: "));
let qtdSanduiches = Number(prompt("Informe a quantidade de sanduíches consumidos: "));

const totalSucos = (qtdSucos * sucos);
const totalSandu = (qtdSanduiches * sanduiche);

const totalCompras = (totalSucos + totalSandu);

console.log('-------------------')
console.log('Recibo');
console.log(`Suco: R$ ${sucos}, quantidade: ${qtdSucos}, Total: R$ ${totalSucos}`);
console.log(`Sanduiches: R$ ${sanduiche}, quantidade: ${qtdSanduiches}, Total: R$ ${totalSandu}`);
console.log(`Custo total a pagar: R$ ${totalCompras}`);
