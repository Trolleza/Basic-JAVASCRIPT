
   
function aluno(nome, n1, n2){
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

this.media = function(){
    return (this.nota1 + this.nota2)/2}};


var a = new aluno("Igor", 8.0, 7.0)
            
console.log(a.media());  


function CriarAluno(nome, n1, n2){
    return{
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return(this.nota1 + this.nota2)/2}}};
var turma = [
    CriarAluno("Igor", 9.0, 6.0),
    CriarAluno("João", 7.0, 4,0),
    CriarAluno("Maria", 8.5, 10)];
var aluno = turma[2];

for(var aluno of turma){
    console.log(aluno.nome + " - " + aluno.media())};
