const currentNumberWrapper = document.getElementById('currentNumber');

var currentNumber = 0;

currentNumberWrapper.innerHTML=0;

function increment(){
    currentNumber= currentNumber + 1;
    currentNumberWrapper.innerHTML= currentNumber;
}
function decrement(){
    currentNumber= currentNumber - 1;
    currentNumberWrapper.innerHTML=currentNumber;
}