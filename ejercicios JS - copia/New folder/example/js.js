const options =['coche', 'viaje', 'crucero','llavero']
const lotteryNumberInput = document.querySelector('#lotteryNumber')

function handleLotteryNumberChange(ev){
    const input = ev.currentTarget;
    const selectedNumber = parseInt(input.value);
    const ind = selectedNumber - 1; //index started in position 0 
    const result = options[ind]
    console.log('premio:', result)
}

lotteryNumberInput.addEventListener('keyup', handleLotteryNumberChange);