/* script.js 
   Chapter 1 - Eloquent JavaScript
   
   Testando os caracteres de escape 
   sáb 22 jun 2024 10:59:12  
   seg 07 abr 2025 12:12:45 */
   
   13
   
   /* Isso não faz sentido nenhum ... 
      Mas também não causa nenhum problema! */
   
   console.log(13); // isso já faz alguma coisa
      
   5 + 8 // nem fede, nem cheira 
   console.log(5 + 8); // isso traz algum resultado
   
   
   9.81
   
   /* Também não faz sentido nenhum ... 
      Mas não causa problema! */
      
   9 + .81 // idem 
   
   // Com o console.log() ... Já é outra coisa!
   
   console.log(9.81); // isso já faz alguma coisa
   console.log(9 + .81); // isso traz algum resultado
   
   5.998e8 
   
   /* Outra vez não serve pra nada ... 
      Mas o interpretador JavaScript não reclama! */
   
   console.log(5.998e8); // escreve o número em formato decimal
   
   // console.log(5.999e8/2);
   // console.log(2.999e8*2);
   // console.log(5.999e8/3);
   // console.log(199966666.66666666*2);
   
   
   2.999e8 + 2.999e8 // Não faz nada ... E não reclama!
   console.log(2.999e8 + 2.999e8); // faz uma operação

   console.log(1.999e8 + 3.999e8);
   /* Aqui também faz a operação ...
      E o resultado é sempre apresentado em decimal */
   
   
   
   
   // sem os caracteres especiais

  var texto = `Down on the sea`;
  console.log(texto);

  var texto = `Lie on the ocean`;   
  console.log(texto);

  var texto = `Float on the ocean`;
  console.log(texto);

  // com os caracteres especiais

  var texto1 = `Down on \"aspas\" the sea`;
  var texto2 = `Lie on \\n\nthe ocean`;   
  var texto3 = `Floating\\t\ton the small\\t\tocean`;

  console.log(texto1);
  console.log(texto2);
  console.log(texto3);

  // Down on "aspas" the sea     \"
  // Lie on                      \n
  // the ocean
  // Float	 on the 	ocean       \t

  texto3 = "This is the first line\nAnd this is the second";
  console.log(texto3);

  /* Exercício 1

  var sharp = "";
  n = 0;
  while(n<7) {
  sharp += "#";
  console.log(sharp);
  n++;
  }

  // Resposta do autor:

  for(let line="#"; line.length<8; line +="#")
  console.log(line)

  */

  // Colocando uma barra no texto

  console.log("A newline character is written like \"\\n\".");

  // Concatenação

  console.log("con" + "cat" + "e" + "nate");

  // Templates iterias (aspas invertidas/acento grave)

  console.log(`A metade de 100 é ${100 / 2}.`);     
  
  // Operadores unários ( Unary operators )
  
  console.log(typeof(4.5));
  // -> number

  console.log(typeof("x"));
  // -> string
  
  // mais sobre console.log() no próximo capítulo
  
  console.log(-(10 - 2));
  // -> -8
  
  // Valores booleanos (Boolean values)

  //  true/false
  
    // Comparação
        
        console.log(3 > 2);
        // -> true  
        
        console.log(3 < 2);
        // -> false    
   
        /// Strings podem ser comparadas da mesma forma
      
        console.log("Aardvark" < "Zoroaster");
        // -> true

    /* *** Operadores de comparação                         
        
         < > >= <= == != === !==                                */

    /* *** O único operador que não é igual a si mesmo é o NaN  
        
       NaN                                                      */
        
        console.log(NaN == NaN);
        // -- false

    console.log("Operadores lógicos ( logical operators )"); 
    /* *** Operadores lógicos (logical operators)
        
        &&   ||   !                                               */
        
      /* O operador && (And) representa o E lógico. 
         É um operador binário e seu resultado é verdadeiro somente se 
         ambos os valores dados a ele forem verdadeiros. */
        
        console.log('&& And (E lógico)');
        console.log('true && true é: \n -> ' + (true && true));
        // -> true

        console.log('true && false é: ' + (true && false));
        // -> false

        console.log('false && true é: ' + (false && true));
        // -> false

        console.log('false && false é: ' + (false && false));
        // -> false

      /* O operador || (Ou) representa o E lógico. 
         É um operador binário e seu resultado é verdadeiro somente se 
         ambos os valores dados a ele forem verdadeiros. */
        
        console.log('|| Or (Ou lógico)');
        console.log(false || false);
        // -> false

        console.log(true || false);
        // -> true

        console.log(false || true);
        // -> ture

        console.log(true || true);
        // -> true

        /* Não é escrito como um ponto de exclamação !. 
           É um operador unário que inverte o valor dado a ele. 
           !true produz false e !false resulta em true. */

        console.log('! Not (Não lógico)');
        console.log(!true);
        // -> false

        console.log(!false);
        // -> true


        // Uso mínimo de parênteses
        console.log(1 + 1 == 2 && 10 * 10 > 50);

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






















































        
