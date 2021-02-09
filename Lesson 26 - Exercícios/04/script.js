
/*Escreva uma função que receba um Array com 5
números e retorne a média deles*/

function media(lista){
    var total = 0;
    for (let num of lista){total += num}
    return total / lista.length};

console.log(media([7, 4, 5, 8, 6]));

