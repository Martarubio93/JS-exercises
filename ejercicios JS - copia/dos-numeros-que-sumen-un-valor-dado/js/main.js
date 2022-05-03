// implemente una funcion twoSum, tal que dado un array de enteros y un numero K
// devuelvalos pares de numeros que sumen k






const numbers = [0,9,7,5,8,3,12]
const k = 12;



let pairSum = [];
let numbersSave = {}
function twoSum (numbers, k){

    for (let i = 0; i < numbers.lenght; i++){
        for (let j = i +1; j < numbers.lenght; j++){
            if(numbers[i] + numbers[j] == k){
                
                pairSum.push [[numbers[i]], [numbers[j]]]
               
            }
            console.log(numbers[i] + numbers[j])
        }
        console.log(numbers[i] + numbers[j])
    }
     
   
    
     

}



console.log(twoSum(numbers))




 