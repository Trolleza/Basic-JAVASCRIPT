
/*Escreva um programa que receba um array de objetos
com as propriedades altura e idade e imprima: A maior
e menor altura e a média da idade.*/

var Alunos=[
    {Nome:"Pedro", Altura:1.73, Idade:20},
    {Nome:"Rafaela", Altura:1.67, Idade:44},
    {Nome:"Graziele", Altura:1.76, Idade:35},
    {Nome:"Pedro", Altura:1.93, Idade:47},
    {Nome:"Morgana", Altura:1.57, Idade:16}];

var MediaIdade = 0;
var MaiorAltura = 0;
var MenorAltura = 100;

for(let Aluno of Alunos){
    if((Aluno.Altura)>MaiorAltura){
        MaiorAltura=Aluno.Altura}
    if((Aluno.Altura)<MenorAltura){
        MenorAltura = (Aluno.Altura)}};

var SomaMedia = 0

for (var i=0; i<Alunos.length; i++){
    SomaMedia += (Alunos[i].Idade)};

MediaIdade = SomaMedia / Alunos.length;

console.log("Mais Alto", MaiorAltura);
console.log("Mais Baixo", MenorAltura);
console.log("Media de Idade", MediaIdade);

