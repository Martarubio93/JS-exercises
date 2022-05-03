// const originalArray = [55, 23, 26, 2, 25];
// const sortedArray = originalArray.sort((a, b) => {
//   if (a === b){
//       return 0;
//   } else if (b >= a ){
//       return -1;
//   } 
//   return 1;

// })

// console.log(sortedArray);




//ALGORITMIASWAP


// Below partition is Hoare's algorithm.
// let partition = function(arr, low, high) {
//     let pivotValue = arr[low];
//     let i = low;
//     let j = high;
  
//     while (i < j) {
//       while (i <= high && arr[i] <= pivotValue) {
//         i++;
//       }
  
//       while (arr[j] > pivotValue) {
//         j--;
//       }
  
//       if (i < j) {
//         // swap arr[i], arr[j]
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       } 
//     }
  
//     arr[low] = arr[j];
//     arr[j] = pivotValue;
  
//     // return the pivot index
//     return j;
//   };
  
//   let quickSortRec = function(a, low, high) {
//     if (high > low) {
//       let pivotIndex = partition(a, low, high);
//       quickSortRec(a, low, pivotIndex - 1);
//       quickSortRec(a, pivotIndex + 1, high);
//     }
//   };
  
//   let quickSort = function(a) {
//     quickSortRec(a, 0, a.length - 1);
//   };
  
//   let a = [55, 23, 26, 2, 18, 78, 23, 8, 2, 3]
  
//   console.log("Before Sorting")
//   console.log(a);
  
//   quickSort(a);
  
//   console.log("After Sorting")
//   console.log(a);


//let low-high = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let pivot = [55, 23, 26, 2, 18, 78, 23, 8, 2, 3]
let array = [45,2,3,14,11];

function bubbleSort (arr) {
    for (let i = 0; i <= arr.length -1 ; i++){
        for(let j = 0; j <= arr.length - 1; j++){
            if( arr[j] < arr[j+1]){
                let aux = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = aux;
            }
        }
    } 
    return arr;
}


console.log(bubbleSort(pivot))


//video explitativo
//https://www.youtube.com/watch?v=ZBaXyAt7NOk