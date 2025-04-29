/* script.js

     Eloquente JavaScript 
  
         Third Edition
                  
         Marijn Haverbeke

--------------------------------------------------------
Capítulo 2 - Estrutura do Programa ( Program Structure )

  dom 23 jun 2024 14:10:58 
  sex 28 jun 2024 15:49:07 
  

*/

maximo = (a, b, c, d) => {
  let maior = "";
  indice = 0;
  while(indice < arguments.length) {
    if (arguments[indice] > arguments[indice + 1]) {
      maior = arguments[indice] 
    } else { 
      maior = arguments[indice + 1]; }
    indice++;
    console.log(arguments[indice]);
  }
  console.log(arguments.length);
  console.log(maior);
  return maior;
}

console.log(maximo(1, 2));

// dom 23 jun 2024 15:20:33 
// Não funcionou ... Mas vai!





























































































































































































