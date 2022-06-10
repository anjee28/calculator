let dispArr = [];
const disp = document.getElementById('display');
let input1 = 0;
let input2 = 0;

let dec = 0;
let memeory = 0;

document.getElementById('plus').addEventListener('click', add);

function add() {
    
    if(input2 === 0) {
        disp.innerHTML = ("");
        input2 = input1 + input2;      
    }
    else {        
        input2 = input1 + input2;
        disp.innerHTML = input2;
        dispArr = input2.split('');
    }
    
    dispClear();
}

function subtract (input1, input2) {
    const difference = input1 - input2;
    return difference;
}

function multiply (input1, input2) {
    const product = input1 * input2;
    return product;
}

function divide (input1, input2) {
    const quotient = input1 / input2;
    return quotient;
}

function operate () {
    
}

var elements = document.querySelectorAll('.btnNum');

elements.forEach((button) => {
 
    button.addEventListener('click', () => {
        if(dispArr.length >= 10){
            return;
        } 
        else {
            dispArr.push(button.innerHTML);
            input1 = parseInt(dispArr.join(''));
            disp.innerHTML = input1;
            console.log(input1);
        }              
    });
});

const backspace = document.getElementById('backspace');

backspace.addEventListener('click', () => {
    dispArr.pop();
    input1 = parseInt(dispArr.join(''));
    disp.innerHTML = input1;
    console.log(input1);
})

function dispClear() {

    for (i = 0;i < dispArr.length; i++) {
        dispArr.pop();
    }
}