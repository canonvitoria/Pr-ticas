/* Execicio 1 : Altere o programa desenvolvido nas dinâmicas D1 e D2 de
maneira que, caso algum dos produtos consumidos excedam 10
unidades, seja oferecido um desconto de 20% no custo daquele
produto. 

Recibo:
Suco: 5.2, quantidade: 12, valor sem desconto: 62.40, valor do desconto: 12.48, total: R$ 49.92
Sanduiche: 12, quantidade: 12, valor sem desconto: 144.00, valor do desconto: 28.80, total: R$ 115.20
Total a pagar: R$ 206.40*/

import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});

const sucos = 5.2;
const sanduiche = 12;
const desconto = 0.8;

let qtdSucos = Number(prompt("Informe a quantidade de sucos consumidos: "));
let qtdSanduiches = Number(prompt("Informe a quantidade de sanduíches consumidos: "));

if (qtdSucos || qtdSanduiches > 10) {
    const totalSucos = (qtdSucos * sucos);
    const descontoSucos = (totalSucos * desconto);
    const valorDescontoSuco = descontoSucos - totalSucos;

    const totalSandu = (qtdSanduiches * sanduiche);
    const descontoSanduiches = (totalSandu * desconto);
    const valorDescontoSandu =  totalSandu - descontoSanduiches;

    const totalCompras = (descontoSucos + descontoSanduiches);

    console.log('-------------------')
    console.log('Recibo');
    console.log(`Suco: R$ ${sucos}, quantidade: ${qtdSucos}, valor sem desconto: R$${totalSucos.toFixed(2)}, valor do desconto: R$${valorDescontoSuco.toFixed(2)}, Total: R$ ${descontoSucos.toFixed(2)}`);
    console.log(`Suco: R$ ${sanduiche}, quantidade: ${qtdSanduiches}, valor sem desconto: R$${totalSandu.toFixed(2)}, valor do desconto: R$${valorDescontoSandu.toFixed(2)}, Total: R$ ${descontoSanduiches.toFixed(2)}`);
    console.log(`Custo total a pagar: R$ ${totalCompras.toFixed(2)}`);

} else {
    const totalSucos = (qtdSucos * sucos);
    const totalSandu = (qtdSanduiches * sanduiche);

    const totalCompras = (totalSucos + totalSandu);

    console.log('-------------------')
    console.log('Recibo');
    console.log(`Suco: R$ ${sucos}, quantidade: ${qtdSucos}, Total: R$ ${totalSucos}`);
    console.log(`Sanduiches: R$ ${sanduiche}, quantidade: ${qtdSanduiches}, Total: R$ ${totalSandu}`);
    console.log(`Custo total a pagar: R$ ${totalCompras}`);
}



