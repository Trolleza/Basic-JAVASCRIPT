
/*Escreva uma função que receba um Array com 3 
números e imprima eles em ordem*/

function OrdenarLista(lista){
    var ListaOrdenada = lista.sort((a,b)=>a-b)
    for (let num of ListaOrdenada){
        console.log(num)}};

OrdenarLista([9, 25, 3, 20, 19]);



