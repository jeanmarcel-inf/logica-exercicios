let salarioPreReajuste = 1501;
let salarioPosReajuste;
let aumento;

if(salarioPreReajuste <= 280){
    aumento = salarioPreReajuste * 0.2;
    salarioPosReajuste = salarioPreReajuste + aumento
    console.log(`Antigo salario: R$${salarioPreReajuste.toFixed(2)}`)
    console.log(`Novo salário: R$${salarioPosReajuste.toFixed(2)}`)
    console.log(`O aumento foi de 20%, equivale á R$${aumento.toFixed(2)} do salário pré reajuste`)
}

if(salarioPreReajuste > 280 && salarioPreReajuste <= 700){
    aumento = salarioPreReajuste * 0.15;
    salarioPosReajuste = salarioPreReajuste + aumento
    console.log(`Antigo salario: R$${salarioPreReajuste.toFixed(2)}`)
    console.log(`Novo salário: R$${salarioPosReajuste.toFixed(2)}`)
    console.log(`O aumento foi de 15%, equivale á R$${aumento.toFixed(2)} do salário pré reajuste`)
}

if(salarioPreReajuste > 700 && salarioPreReajuste <= 1500){
    aumento = salarioPreReajuste * 0.1;
    salarioPosReajuste = salarioPreReajuste + aumento
    console.log(`Antigo salario: R$${salarioPreReajuste.toFixed(2)}`)
    console.log(`Novo salário: R$${salarioPosReajuste.toFixed(2)}`)
    console.log(`O aumento foi de 10%, equivale á R$${aumento.toFixed(2)} do salário pré reajuste`)
}

if(salarioPreReajuste > 1500){
    aumento = salarioPreReajuste * 0.05;
    salarioPosReajuste = salarioPreReajuste + aumento
    console.log(`Antigo salario: R$${salarioPreReajuste.toFixed(2)}`)
    console.log(`Novo salário: R$${salarioPosReajuste.toFixed(2)}`)
    console.log(`O aumento foi de 5%, equivale á R$${aumento.toFixed(2)} do salário pré reajuste`)
}

//  RESOLVIDO  //
