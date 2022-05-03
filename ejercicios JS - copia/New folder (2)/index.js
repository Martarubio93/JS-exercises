const arr1 = [1, 2];
const arr2 = [2, 3];


let position = [];
const intersection = () => {
  

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      //console.log(arr2[j]);
      if (arr1[i] == arr2[j]) {
        position.push(arr1[i]);
      } else {
        false;
      }
    }
    
  }
  return position;
};

console.log(intersection(arr1,arr2))
console.log(position)