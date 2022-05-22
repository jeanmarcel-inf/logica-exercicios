let produto1 = 500; 
let produto2 = 600;  
let produto3 = 200; 


if(produto1 < produto2 && produto1 < produto3){
    console.log(`Você deve comprar o produto 1, de valor: R$${produto1.toFixed(2)}`)
}

if(produto2 < produto1 && produto2 < produto3){
    console.log(`Você deve comprar o produto 2, de valor: R$${produto2.toFixed(2)}`)
}

if(produto3 < produto1 && produto3 < produto2){
    console.log(`Você deve comprar o produto 3, de valor: R$${produto3.toFixed(2)}`)
}
