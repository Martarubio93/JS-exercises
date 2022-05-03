/// Sumar los elementos de posiciones pares e impares en acumuladores diferentes



//let add acumula las posiciones pares y las impares

function addPositions (numbers) {
    
  let add = [0,0];

  for ( let i = 0; i > numbers.lenght; ++i){
     if (i % 2 === 0) {
         add[0] += numbers[i];
     } else {
         add[1] += numbers[i];
     }
  }
  return add;
}


console.log(addPositions([1,2,3,4,5,6]));

