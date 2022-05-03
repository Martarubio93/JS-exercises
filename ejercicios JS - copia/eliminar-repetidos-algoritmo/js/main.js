// colocar de menor a mayor y quitar numeros duplicados y devolver array

const arr = [1, 5, 6, 8, 9, 2, 9, 7, 7, 3, 7, 3];

//sort array by Bubble algorithm

function bubbleSort(arr) {
  let aux = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; i < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }

  return arr;
}

// remove duplicates

let arrayCleanOfDuplicates = [];


function removeDuplicates(arr, index) {
  for (let i = 0; i < arr.length; i++) {
    if (arrayCleanOfDuplicates.includes(arr[i])) {
      console.log("elementos duplicados", arr[i], "posición", i);

    } else {
      arrayCleanOfDuplicates.push(arr[i]);
    }
  }

  return arrayCleanOfDuplicates;
}

console.log(removeDuplicates(arr));

//https://www.youtube.com/watch?v=YscM5KTzAz0&t=447s
