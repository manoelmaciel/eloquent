/* Script.js

     Eloquente JavaScript 
  
         Third Edition
                  
         Marijn Haverbeke

--------------------------------------------------------
Capítulo 2 - Estrutura do Program (Program Structure)

  dom 23 jun 2024 20:28:33 

*/

// 1 - Triângulo

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
 
console.log('My solution ... ');
 
// triangleOfSharp = (aSharp, lines) => {
  let control = 1;
  let screen = aSharp = "#";
  let lines = 7;
  while(control <= lines) {    
    console.log(screen);
    screen = screen + aSharp; // "#", "##", "###", ...
    control++;
  }  
// }

// triangleOfSharp();

console.log('Solution of autor ...');

for(let line = "#"; line.length < 8; line += "#") 
  console.log(line);

// 2 - FizzBuzz

console.log("\n FIZZBUZZ Original")

for (let n=1; n<=100; n++) {
  screen = n;
  if (n % 3 == 0) screen = 'Fizz';
  if (n % 5 == 0) screen = 'Buzz';  
  if (n % 3 == 0 && n % 5 == 0) screen = 'FizzBuzz';   
  console.log(screen);  
}

console.log("\n FIZZBUZZ 2")

for (let n = 1; n <= 100; n++) {
  screen = n;  
  if (n % 3 == 0 && n % 5 == 0) screen = 'FizzBuzz'; 
  else { 
    if (n % 3 == 0) screen = 'Fizz';
    if (n % 5 == 0) screen = 'Buzz';
  }
  console.log(screen);
}
  
console.log("\n FIZZBUZZ Study")

for (let n = 1; n <= 100; n++) {
  if (!(n % 3 == 0 && n % 5 == 0)) { 
    screen = n; 
    if (n % 3 == 0) screen = 'Fizz';
    if (n % 5 == 0) screen = 'Buzz';    
  }
  else 
    screen = 'FizzBuzz';
  console.log(screen);
}

/* CHESSBOARD */

// Solution 1

control = 0;
screen = "";
let line1 = " # # # #\n";
let line2 = "# # # # \n";
while (control < 8) {
  if (control % 2 == 0)
    screen += line1;
  else
    screen += line2;
  control++;
}
console.log(screen);
    
  // Solution 2

  let width = 12;
  let height = 10;

  screen = "";
  line1 = "";
  line2 = "";

  control = 0;
  while(control < width) {
    if (control % 2 == 0) { 
      line1 += " "; 
      line2 += "#";
    } else {
      line1 += "#"; 
      line2 += " ";
    }
    control++;
  }
  line1 += "\n"; 
  line2 += "\n"; 
  
  control = 0;
  while (control < height) {
    if (control % 2 == 0)
      screen += line1;
    else
      screen += line2;
    control++;
  }
  console.log(screen);
      
    
    
    
    
    
    
    
    
    
    
    
    
    
    
