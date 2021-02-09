
/*Escreva um programa que imprima o seguinte padrão:
*
* *
* * *
* * * *
* * * * *
*/

function Escada(altura){
    for(let i=1; i<=altura; i++){
        let string = ""
        for(let j=1; j<= i; j++){
            string += "*"}
        
        console.log(string)}};

Escada(10)
console.log(Escada);

