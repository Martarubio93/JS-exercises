//SOLUCIÓN 1

let replace = function(string, index, character) {
    return string.substr(0, index) + character + string.substr(index + character.length);
}

let removeSpaces = function(space) {
    // if (!space || space.length === 0) {
    //     return;
    // }

    let read = 0;
    let write = 0;
    while (read < space.length) {
        if (space[read] != ' ' && space[read] != '\t') {
            space = replace(space, write, space[read]);
            write++;
        }
        read++;
    }

    return space.substr(0, write);
};

console.log("Before: ", "All greek to me");
console.log("After: ", removeSpaces("All greek to me"));