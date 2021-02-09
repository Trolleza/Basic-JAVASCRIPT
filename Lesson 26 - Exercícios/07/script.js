
/*Escreva uma função que receba um objeto
e imprima suas propriedades*/

function propriedades(object){
    for(let propriedades in object){
        console.log(propriedades)}};

var pessoa = {nome: "José", idade: 35, altura: 1.80};
propriedades(pessoa);

console.log(pessoa)


