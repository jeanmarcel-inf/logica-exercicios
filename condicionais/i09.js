let num1 = 5;
let num2 = 2;
let num3 = 8;

if(num1 > num2 && num1 > num3 && num2 > num3){
    console.log(num1, num2, num3)
}
else if(num1 > num2 && num1 > num2 && num3 > num2){
    console.log(num1, num3, num2)
}


if(num2 > num1 && num2 > num3 && num1 > num3){
    console.log(num2, num1, num3)
}
else if(num2 > num1 && num2 > num3 && num3 > num1){
    console.log(num2, num3, num1)
}

if(num3 > num1 && num3 > num2 && num1 > num2){
    console.log(num3, num1, num2)
}
else if(num3 > num1 && num3 > num2 && num2 > num1){
    console.log(num3, num2, num1)
}

// RESOLUÇÃO DA INTERNET //