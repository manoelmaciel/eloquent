/* Script.js

     Eloquente JavaScript 
  
         Third Edition
                  
         Marijn Haverbeke

--------------------------------------------------------
Capítulo 2 - Estrutura do Program (Program Structure)

  dom 23 jun 2024 20:28:33 

*/

// Triângulo

/* 

Escreva um loop que faça sete chamadas para console.log gerar o seguinte triângulo:

#
##
###
####
#####
######
#######

*/
 
console.log('Javscript ... Funcionando!');
 
triangulo = (sharp) => {
  controle = 0;
  while(controle < 7) {
    console.log(sharp);
    sharp = sharp + "#";
    controle++;
  }  
}

triangulo('#');

