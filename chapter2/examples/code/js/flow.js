/* script.js

     Eloquente JavaScript 
  
         Third Edition
                  
         Marijn Haverbeke

--------------------------------------------------------
Capítulo 2 - Program Structure
sáb 06 jul 2024 12:29:09 

/* *** linear ( linha reta )                          */
// Um comando executado seguido de outro

  let theNumber = 0;
  console.log("( *** Linear *** )");
  theNumber = Number(prompt("Pick a number", "5"));
  console.log("This number is", theNumber + ". ( Linear )");
  console.log("Your number is the square root of " +
            theNumber ** 2 + ".");
  console.log("Your number is the cube root of " +
            theNumber ** 3 + ".");
            
/* *** Condicional ( isso ou nada )                          */
// Um comando é executado ou não dependendo de uma condição

  console.log("( *** Condicional *** )");
  theNumber = Number(prompt("Pick a number", "Algo"));
  if (!Number.isNaN(theNumber)) {
    console.log("This number is", theNumber + ".");
    console.log("Your number is the square root of " +
              theNumber ** 2 + ".");
    console.log("Your number is the cube root of " +
              theNumber ** 3 + ".");
  }            
            
/* *** Bi-condicional ( isso ou nada )                          */
// Um comando ou o outro é executado dependendo de uma condição

  console.log("( *** Bi-condicional *** )");
  theNumber = Number(prompt("Pick a number", "Algo"));
  if (!Number.isNaN(theNumber)) {
    console.log("This number is", theNumber + ".");
    console.log("Your number is the square root of " +
              theNumber ** 2 + ".");
    console.log("Your number is the cube root of " +
              theNumber ** 3 + ".");
  } else {
    console.log("Você não digitou um número!");
  }           

// This is a ... Test!

// <script>
    var ap1 = Number(prompt("Nota da ap1"));
    var ap2 = Number(prompt("Nota da ap2"));
    var ap3nota = 5 - ((ap1 + ap2) * 0.3);
    var ap3questoes = (ap3nota / 0.16);
    var nota = ap3questoes * 0.4;

    document.write(nota + "<br>");
    document.write(Math.round(ap3questoes));
// seg 08 jul 2024 17:26:53 </script>




