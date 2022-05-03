// EJERCICIOS PRUEBAS TÉCNICAS;

// 1. Hacer que se impriman por consola Blizz o Flizz
// Múltiplos de 3 = Blizz
// Múltiplos de 5 = Flizz
// Múltiplos de 3 y 4 = blizzflizz


function blizzflizz (num) {
    if ( num === 0){
        return 0;
    }
    if (num % 3 === 0 && num % 5 === 0){
        return "blizzflizz"
    }

    if (num % 3 === 0) {
        return "Blizz"
    }

    if (num %5 === 0) {
        return "Flizz"
    }
}

function print (num) {

    for(let i = 0; i<= num; i++) {
        console.log (`${i}:${blizzflizz(i)}`)

    }
   
}

print(25);