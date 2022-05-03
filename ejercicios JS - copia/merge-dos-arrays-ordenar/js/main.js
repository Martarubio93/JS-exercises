


// let mergeSorted = function(head1, head2) {
//     // if both lists are empty then merged list is also empty
//     // if one of the lists is empty then other is the merged list
//     if (!head1) {
//       return head2;
//     } else if (!head2) {
//       return head1;
//     }

//     let mergedHead = null;
//     if (head1.data <= head2.data) {
//       mergedHead = head1;
//       head1 = head1.next;
//     } else {
//       mergedHead = head2;
//       head2 = head2.next;
//     }

//     let mergedTail = mergedHead;

//     while (head1 && head2) {
//       let temp = null;
//       if (head1.data <= head2.data) {
//         temp = head1;
//         head1 = head1.next;
//       } else {
//         temp = head2;
//         head2 = head2.next;
//       }

//       mergedTail.next = temp;
//       mergedTail = temp;
//     }

//     if (head1) {
//       mergedTail.next = head1;
//     } else if (head2) {
//       mergedTail.next = head2;
//     }

//     return mergedHead;
// };

// let listHead1 = createLinkedList([4, 8, 15, 19, 22]);
// let listHead2 = createLinkedList([7, 9, 10, 16]);

// console.log("List 1:", display(listHead1));
// console.log("List 2:", display(listHead2));

// let merge = mergeSorted(listHead1, listHead2);
// console.log("Merged:", display(merge));



// let array1 = [4, 8, 15, 19, 22]
// let array2 = [7, 9, 10, 16]

// function merge(array1, array2){
//     let sumArr = [];
//     while ( array1.length && array2.length){
//         let firstElement
//         if(array1[0] <= array2[0]){
//             firstElement = array1.shift()
          
//         }else {
//             firstElement = array2.shift()
//         }
//         sumArr.push(firstElement)
        
        
    
//     }
//     console.log(array1)
//     console.log(array2)

//  sumArr= sumArr.concat(array1).concat(array2);
//  return sumArr


// }


// console.log(merge(array1,array2))


let array1 = [4, 8, 15, 19, 22]
let array2 = [7, 9, 10, 16]



function concatArrays(array1, array2) {
  let concatArray = [];

  while (array1.lenght && array2.lenght) {
    let firstElement;
    if (array1[0] < array2[0]) {
      firstElement = array1.shift(array1);
    } else {
      firstElement = array2.shift(array2);
    }
    concatArray.push(firstElement);
  }
  concatArray = concatArray.concat(array1).concat(array2);
  return concatArray;
}

console.log(concatArrays(array1, array2));