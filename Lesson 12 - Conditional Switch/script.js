var nota1 = 9.0;
var nota2 = 8.0;

var media = (nota1 + nota2) / 2;

var conceito = ""

if(media >= 8){
    conceito = "Menino de Ouro!";}

else if (media >= 6.5){
    conceito = "Tá ruim não!";}

else{
    conceito = "Vixe...";}

conceito = "Mais ou Menos"

console.log(media);
console.log(conceito);

switch(conceito){
    case "Menino de Ouro!":
        console.log("Parabéns, starzinha!")
        break;
    case "Tá ruim não!":
        console.log("Você tá quase lá!")
        break;
    case "Vixe...":
        console.log("Se mata e nasce de novo.")
        break;
        
    default:
        console.log("Teve algum erro!")
    break;}
