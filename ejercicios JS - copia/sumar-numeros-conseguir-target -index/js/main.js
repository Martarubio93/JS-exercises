// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


// function twoSum (nums, target) {
//     const comp = [];
//     for(let i=0; i<nums.length; i++){
//         if(comp[nums[i] ]>=0){
//            // console.log(i)
//             return [ comp[nums[i] ] , i]
//         }
       
//         comp[target-nums[i]] = i
//     }
// }; 


const nums = [4,5,7,2]
const target = 12

// console.log(twoSum(nums, target))




function matchTargetValue (numbers, target){
    let aux =[];
    for( let i = 0; i< numbers.length; i++){
        if(aux[numbers[i]] >= 0){
            return [aux[numbers[i]],i]
        }
           aux[target-numbers[i]] = i
    }
           
}

console.log(matchTargetValue(nums,target))




