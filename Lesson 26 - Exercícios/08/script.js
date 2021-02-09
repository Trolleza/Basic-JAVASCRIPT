
/*Escreva uma função que receba uma data e retorne 
um objeto com as propriedades dia, mês e ano
Referentes a essa data.*/

function Data(d){
    var Meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"]
    
    return{
        dia: d.getDate(),
        mes: Meses[d.getMonth()],
        ano: d.getFullYear()}};

console.log(Data(new Date(Date.now())));


