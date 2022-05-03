



// function suma (val1, val2) {
//     return val1 + val2;
// }

// console.log(suma(1,2))






//2.   ¿ qué valor retorna suma ?

// const a = 1;

// function suma(){
//     const b = 2;
//     return suma2();
// }

// const b = 3;
// const c = 1;


//  function suma2(){
//      const c = 3;
//      return a + b + c;
//  }

//  console.log(suma());


// 3. ¿ qué le pasa a la funcion?

// La funcion no arroja name por consola por el concepto de clausura o closure, resulta que name no está definido dentro o fuera de la funcion foreach
// const bunny ={
//     name: "Gentleman",
//     tasks: ["Speak", "Learn", "Teach"],
//     showTasks: function () {
//         this.tasks.forEach(function ( task) {
//             console.log(this.name + "wants to : " + task);
            
//         });
//     }
// }

// bunny.showTasks()


// let ffindMaxSlidingWindow = function(arr, windowSize) {
//     let result = [];
    
//     if(arr.length == 0) {
//       return result;
//     }
    
//     if (windowSize > arr.length) {
//       return result;
//     }
  
//     let window_ = [];
//     //find out max for first window
//     for (let i = 0; i < windowSize; i++) {
//       while (window_.length > 0 && arr[i] >= arr[window_[window_.length - 1]]) {
//         window_.pop();
//       } 
//       window_.push(i);
//     }
    
//     result.push(arr[window_[0]])
    
//     for (let i = windowSize; i < arr.length; i++) {
//       // remove all numbers that are smaller than current number
//       // from the tail of list
//       while (window_.length > 0 && arr[i] >= arr[window_[window_.length - 1]]) {
//         window_.pop();
//       }
      
//       //remove first number if it doesn't fall in the window anymore
//       if (window_.length > 0 && (window_[0] <= i - windowSize)) {
//         window_.shift();
//       }
      
//       window_.push(i);
//       result.push(arr[window_[0]]);
//     } 
//     return result;
//   };
  
//   let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   console.log("Array = " + array);
//   console.log("Max = " + ffindMaxSlidingWindow(array, 3));
  
//   let array1 = [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67]  
//   console.log("Array = " + array1);
//   console.log("Max = " + ffindMaxSlidingWindow(array1, 3));

// const conjunto = new SecurityPolicyViolationEvent([1,2,9,1,2,3,1,4,1,5,7])
// const lista = [...conjunto].sort();
// console.log(lista);



// const clase1 = {
//     nombre: "neg",
//     apellido: "v"
// }

// const clase2 = clase1;
// clase2.apellit = "vi"

// console.log(clase1.apellido === clase2.apellido)

// const w = {
//     word: "js",
//     mayusculas: function(){
//     return this.word.toUppercase();
//     },
//     minusculas : () => this.word.toLowerCase()
// }

// console.log(w.mayusculas())
// console.log(w.minusculas())


// const clothes = ["jacekt", "this"];

// clothes.length = 0,

//console.log(clothes[0])



// const ob = {
//     message: "hello, world",

//     getMessage() {
//         const message = "hello, heart";
//         return this.message;
//     }
// }

// console.log(ob.getMessage())

// console.log("hilo ppal");

// setTimeout(() => {
//     console.log("setTimeout");
// }, 0);

// const promise = new Promise ((resolve) => {
//     console.log("promise");
//     resolve("promise resolved")
// });
// promise.then((value)=>{
//     console.log(value);
// }

// console.log("ultimo");{
// return globalThis(f,seed, [])

// }


// Teniendo el siguiente código HTML, qué opción usarías para mostrar el texto “error” en rojo cuando el checkbox esté marcado?

// ¿Para qué sirve el tag <datalist>?

// ¿Qué hace el método bind?

// ¿Por qué si A=1 y B=1 la condición (A == B == 0) es false?
// Dom representa el documento como estructura en forma de arbol

// algortimo que realice un blucke que muestre en pantalla los numeros del 1 al 10

// for ( let i = 1;  i <= 10; i++){
//    // console.log(i)
// }

// //multiplos de 5, comprendidos entre 1 y 100

// for (let i = 0; i<= 100; i++){
//     if(i % 5 === 0 ) {
//        // console.log(i)
//     }
// }


//algoritmo que calcule la suma y media de 5 números, usamos propmpt para que el usuario pueda introducir datos
// let n;
// let m = 0;
// const numbers = 5

// for ( let i = 0; i<= numbers; i++){
//   n = parseInt(prompt(i))
//   m = m + n;
// }

// console.log(m)
// console.log(m/numbers)


/// invertir el orden de la cadena de texto

let word = "hello";

function reverseWord(word) {
  let newWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }

  return newWord;
}

console.log(reverseWord(word));



let initialArray =[3,5,9,6,7];

function reverseArray(numbers) {
  let newArray =[];

  for (let i = numbers.length - 1; i >= 0; i--) {
    newArray += numbers[i];
  }

  return newArray;
}

console.log(reverseArray(initialArray));