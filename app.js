//Importação do módulo
let curso = require('./curso');

//Função construtora
function Aluno(nome, quantFaltas, notas){
    
    //Atributos
    this.nome = nome;
    this.quantFaltas = quantFaltas;
    this.notas = notas;

    //Método faltas -  soma 1 a variável quantFaltas do Aluno. 
    this.faltou = function(){
        this.quantFaltas +=1;
    console.log(this.nome + ' faltou e está com ' + this.quantFaltas + ' faltas');
}   

    //Método calcularMedia -  calcula a média do Aluno.
    this.calcularMedia = function(){
        let somaNota = 0;
        
         for(let i=0; i <this.notas.length; i++){
             somaNota += this.notas[i];   
         }
         console.log("A média das notas do(a) " + this.nome + ' é: ' + somaNota / this.notas.length);
         return somaNota / this.notas.length;
    }
}

//Alunos
let aluno1 = new Aluno("Ielison", 5, [8, 8, 6, 7, 6]);
let aluno2 = new Aluno("Larissa", 2, [6, 9, 7, 8, 5]);
let aluno3 = new Aluno("Lucas", 2, [8, 8, 9, 7, 6]);
let aluno4 = new Aluno("Leonardo", 2, [7, 5, 8, 6, 9]);
let aluno5 = new Aluno("Mauro", 2, [5, 5, 7, 6, 5]);
let aluno6 = new Aluno("Daniel", 2, [8, 8, 8, 8, 8]);


//Acessando as propriedades do objeto curso que está dentro da pasta curso no arquivo index.js
console.log(curso);

//Método para adicionar alunos ao curso
curso.curso.adcionarEstudante(aluno1); 
curso.curso.adcionarEstudante(aluno2);
curso.curso.adcionarEstudante(aluno3);
curso.curso.adcionarEstudante(aluno4);
curso.curso.adcionarEstudante(aluno5);
curso.curso.adcionarEstudante(aluno6);
curso.curso.listaResultado();



console.log("Trabalho realizado em grupo nas aulas de Programação Imperativa por Larissa Jantsch, Lucas Anselmo, Iélison Barbosa, Daniel Nunes, Mauro e Leonardo Jaen");