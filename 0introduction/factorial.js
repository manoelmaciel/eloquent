function factorial ( n ) {

  // console.log(n);
     // -> 8 ... 0
  // console.log( factorial( n - 1) * n );
     // isso aqui ... cria um problema sério

  if ( n == 0 ) {
  
    return 1;
    
  } else {
  
    // console.log( factorial( n - 1) * n );
       // um resultado meio confuso ... mas inteligível. Eu acho!
    return factorial( n - 1 ) * n;
  
  }  

}

console.log(factorial( 8 ));
// -> 40320

