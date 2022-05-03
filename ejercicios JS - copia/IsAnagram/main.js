//Check if two words are Anagram or not 

//1 SOLUTION 
//Time complexity: 0(nlogn)

let isAnagram = (word1, word2) => {
    word1 = word1.toUpperCase().split("").sort().join("");
    word2 = word2.toUpperCase().split("").sort().join("");
    return word1 === word2
}

//SOLUTION 2 
//Time complexity: 0(n) - linear

let isAnagram2 = (word1, word2) => {
    let hist = {}
    for (let i=0; i < word1.length; i++){
        let char = word1[i];
        if (char in hist ){
            hist[char]++;
        }else {
            hist[char] = 1;
        }
    }
    for (let i = 0; i < word2.length; i++){
        let char = word2[i];
        if (char in hist){
            hist[char]--;

        }else {
            return false
        }
    }

    for (let key in hist){
        if (hist[key]){
            return false
        }
    }

    return true
}


console.log(
    isAnagram('abC', 'cab'),
    isAnagram2("silent", "listen")
)