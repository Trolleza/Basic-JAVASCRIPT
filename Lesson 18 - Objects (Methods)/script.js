
function CalcMedia(){
    return(this.notas[0] + this.notas[1]) / 2};

var aluno={
    nome:"Igor", 
    notas:[7.0, 8.0],

    media: CalcMedia};

var aluno1={
    nome:"Maria", 
    notas:[6.0, 8.5],
                
    media: CalcMedia};

console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno1.nome);
console.log(aluno1.media());


