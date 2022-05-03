//contar el numero de veces que aparece una plabra

// let text =
//   "hola que tal, este ejercicio consiste en contar el numero de palabras que se repiten y ordenarlo de mayor a menor";

// const textArray = text.split(/[^a-zA-Z-]+/);
// //const textArray = [text.replace(/[.!,]/g,"")]

// console.log(textArray);

// const numberRepeatWord = (arr) => {
//   const words = [];
//   textArray.forEach((word) => {
//     words[word] = !words[word] ? 1 : (words[word] += 1);
//   });
//   return Object.keys(words)
//   .map(word => ({name : word, times: words[word]}))
//   .sort((a,b) => b.times - a.times)
// };

// console.log(numberRepeatWord());



let numberList =
[
    8,
    23,
    12,
    17,
    25,
    8,
    8,
    17,
    12,
    17,
    13,
    25,
    8,
    23,
    17,
    17
  ];


const numberRepetitions= (arr) => {
  const numbers = [];
  numberList.forEach((number) => {
    numbers[number] = !numbers[number] ? 1 : (numbers[number] += 1);
  });
  return Object.keys(numbers)
  .map(number => ({name : number, times: numbers[number]}))
  .sort((a,b) => b.times - a.times)

};

console.log(numberRepetitions());
