
/*Escreva uma função que receba um Array com 5
números e retorne o maior deles*/

function MaiorEntreDois(num1,num2){
    if(num1 > num2){return num1}
    else{return num2}};

function MaiorNum(lista){
    var maior = lista[0]
    for (let num of lista){
        maior = MaiorEntreDois(num, maior)}
    return maior};

console.log(MaiorNum([9, 25, 3, 19, 18]));



