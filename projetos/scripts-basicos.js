document.addEventListener("DOMContentLoaded",function () {
  

  //vendo dcm acionado todo o HTML foi completamente carregado
  //Tipos de dados
  //String: Sequencia de caracter
  //Number: numeros inrteiros ou pontos flutuantes (10.5)
  //booleaan: retorna dois valores, true ou false
  //objet: estrutura de dados que pode armazernar mutiplos valores
  //Null: quando esta vazio;
  //array: objeto especial ardenado
  //function: bloco de codigo reutilizavel.
  //const: É usado para declarar uma variavel cujo o valor é permanete

//Let é usado para declarar variaveis que os valores podem ser retribuidos 

// Entre ()variavel e entre {} o comando 
//let c =0;
//console.log(c);

const notaMedia = 3;

if(notaMedia >= 6){
  //alert('aluno passou');
}
else if (notaMedia >=4 && notaMedia < 6){
  //alert('aluno quase passou');
}
else{
  //alert('aluno reprovou!');
};

//----------OPERADORES--------
//= Sinal de atribuição 
//== sinal de comparação 
//=== Verifica se os dois são iguais e têm o mesmo tipo de dados 
//!= se é estritamente diferente 
// > Maior 
// < Menor 

const num = '6' ;
if (num === 6){
  //alert("é igual");
}
else {
  //alert ("O tipo de dados é diferente");
}

const professor = "joão";

  if (professor == "Lucas"){
  console.log('sim é o Lucas')

}else {
  console.log('não é Lucas')
}
















});