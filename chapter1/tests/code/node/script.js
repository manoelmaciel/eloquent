/*
     Eloquente JavaScript 
  
         Third Edition
                  
         Marijn Haverbeke

--------------------------------------------------------
Capítulo 1 - Valores, Tipos e Operadores
qui 20 jun 2024 14:03:51 
sáb 22 jun 2024 10:58:42 

*/


/* *** Valores (values)

    Silence is golden

*/

/* *** Números (numbers) */


13               // Inteiro

/* Isso não faz nada.
   Inclusive nenhum sentido.
   Mas também não causa nenhum problema */

console.log(13); // Isso já faz alguma coisa
// -> 13         // Apresenta algum resultado na tela
                 // Mas já tem uma série de outras coisas envolvidas

8.91             // Fracionário

/* Isso não faz nada também.
   Inclusive nenhum sentido como no caso anterior.
   Mas também não causa nenhum problema */

console.log(8.91); // Isso já faz alguma coisa
// -> 8.91         // Apresenta algum resultado na tela
                   // Mas já tem uma série de "outras coisas" envolvidas
                   // "Essas coisas" serão discutidas mais tarde

5.998e8            // Notação científica

/* Isso não faz nada também.
   Inclusive nenhum sentido como no caso anterior.
   Mas também não causa nenhum problema */

console.log(5.998e8); // Isso já faz alguma coisa
// -> 599800000       // Apresenta algum resultado na tela
                      // Mas já tem uma série de "outras coisas" envolvidas
                      // "Essas coisas" serão discutidas mais tarde

/* No JavaScript é tudo "number"
   Tanto faz inteiro, fracionário ou notação científica é tudo "number"
   E é tudo representado por 64 bits. Isso limita a linguagem.
   É possível trabalhar com uma faixa de mais ou menos 15 quatrilhões.
   O número 15 seguido de 15 zeros. Se é muito ou pouco, depende.
   Mas, sem dúvida, é uma quantia razoável para a maioria das necessidades. */
   
   
  /* *** Aritmética (arithmetic) */
   
    console.log(100 + 4 * 11);
    // -> 144
    
    console.log((100 + 4) * 11);
    // -> 1144
    
    /* *** Operadores aritméticos (arithmetic operators)
   
        + adição
        - subtração
        * multiplicação
        / divisão
        % resto da divisção inteira                     */
        

  /* *** Números especiais (special numbers)            */
  
    Infinity, -Infinity, NaN
           
    console.log(1 / 0);
    // -> Infinity
    
    console.log(-1 / 0);
    // -> -Infinity 
    
    console.log(0 / 0); 
    // -> NaN
    // esperava Infinity
        
   
  /* *** Strings                                          */
  
      `Down on the ocean`
      "Lie on the ocean"
      'Float on the ocean'
    
    /* ***  caractere de escape \ (escaping)
    
       \" - não termina a estring, faz parte dela
       \n - nova linha
       \t - tabulação                                     */

    // console.log('Observe a seguinte string: ');

    // console.log(`This is the first line\\nAnd this is the second`);

    // console.log('O texto acima será exibido desta forma: ');
    console.log("This is the firsr line\nAnd this is second")

    ' -> This is the first line'
    ' -> And this is the second'

    // Este é um exemplo do uso do \n
    
    "É assim que a string: " 
    'A newline character is written "\n".'
    
       
  /* *** Operadores unários (unary operators)             */
  
    console.log('O tipo de dado de 4.5 é ' + typeof 4.5);
    `-> number`
    
    console.log(typeof "x");
    `-> string`
    
    console.log('-(10 - 8) = ' + -(10 - 2));
    `-> -8`
      
  /* *** Valores booleanos (boolean values)                
  
      true e false                                          */
  
    /* *** Comparação                                       */
    
    console.log('3 > 2 é ' + (3 > 2));
    `-> true`

    console.log('3 < 2 é ' + (3 < 2));
    `-> false`

    /* *** Strings podem ser comparadas                     */
   
    console.log("Aardvark" < "Zoroaster")
    // → true
    
    /* *** Operadores de comparação                         
        
         < > >= <= == != === !==                                */

    /* *** O único operador que não é igual a si mesmo é o   
        
      NaN                                                      */
        
        console.log(NaN == NaN);
        // -- false

    console.log("Operadores lógicos ( logical operators )"); 
    /* *** Operadores lógicos (logical operators)
        
        &&   ||   !                                               */
        
      /* O operador && (And) representa o E lógico. 
         É um operador binário e seu resultado é verdadeiro somente se 
         ambos os valores dados a ele forem verdadeiros. */
        
        console.log('&& And(E lógico)');
        console.log(true && true);
        // -> true

        console.log(true && false);
        // -> false

        console.log(false && true);
        // -> false

        console.log(false && false);
        // -> false

      /* O operador || (Ou) representa o E lógico. 
         É um operador binário e seu resultado é verdadeiro somente se 
         ambos os valores dados a ele forem verdadeiros. */
        
        console.log('|| Or (Ou lógico)');
        console.log(false || false);
        // -> false

        console.log(false || true);
        // -> true

        console.log(true || false);
        // -> true

        console.log(true || true);
        // -> true

 
        /* O Não é escrito como um ponto de exclamação !. 
           É um operador unário que inverte o valor dado a ele. 
           !true produz false e !false resulta em true. */

        console.log('! Not (Não lógico)');
        console.log(!true);
        // -> false

        console.log(!false);
        // -> true

        /* Nem sempre é obvio quando os parêntese são necessários. 
        A ordem foi escolhida de forma que em expressões típicas
        como a seguinte, seja necessário o mínimo de parênteses: */
        
          1 + 1 == 2 && 10 * 10 > 50
          

        /* O último operador lógico que discutirei não é unário, 
        nem binário, mas ternário, operando em três valores. 
        É escrito com um ponto de interrogação e dois pontos, desta forma: */

          console.log(true ? 1 : 2);
          // → 1
          console.log(false ? 1 : 2);
          // → 2
 
    // Operador condicional
    // Operardor lógico ternário (resultadoLógico ? retorno1 : retorno2)
    
        console.log(true ? 'retorno1' : 'retorno2');
        // → 1
        console.log(false ? 'retorno1' : 'retorno2');
        // → 2
        
    // Valores vazios
           
        undefined 
           
        null
           
        /* A diferença de significado entre undefined e null é um acidente do 
           design do JavaScript e não importa na maioria das vezes. Nos casos 
           em que você realmente precisa se preocupar com esses valores, 
           recomendo tratá-los como intercambiáveis. */
              
          var algo;
          console.log(algo);                        
          // -> aparetemente não faz nada
            

     // Conversão automática de tipo

        console.log(8 * null)
        // → 0
        console.log("5" - 1)
        // → 4
        console.log("5" + 1)
        // → 51
        console.log("five" * 2)
        // → NaN
        console.log(false == 0)
        // → true


        console.log(null == undefined);
        // → true
        console.log(null == 0);
        // → false


      // Curto-circuito de operadores lógicos
      // avaliação de curto-circuito (short-circuit evaluation)
      
        console.log(null || "user");
        // -> user
        
        console.log("manoelmaciel" || "user");
        // -> manoelmaciel

  /*
  Resumo

    Examinamos quatro tipos de valores JavaScript neste capítulo: 
    
      números, strings, booleanos e valores indefinidos.

    Esses valores são criados digitando seu nome 
    
      true, null ou valor 13, "abc"
       
    Você pode combinar e transformar valores com operadores. 
    
    Vimos operadores binários para aritmética 
      
        +, -, *, / e %  
        
    concatenação de strings (+), 
      
    comparação 
    
      ==, !=, ===, !==, <, >, <=, >= 
      
    e lógica 
    
      &&, || 
      
    bem como vários operadores unários 
    
      - para negar um número, 
      ! para negar logicamente e 
      typeof para encontrar o tipo de um valor e 
      
    um operador ternário 
   
     (?:) 
    
    para escolher um dos dois valores baseados em um terceiro valor.

    Isso fornece informações suficientes para usar o JavaScript como uma 
  calculadora de bolso, mas não muito mais. O próximo capítulo começará 
  a unir essas expressões em programas básicos. */
























































































































                                  
                                  
