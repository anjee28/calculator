
//Global Variables
let input1 = 0;
let input2 = "";
let input1Arr = [];

var btnNum = document.querySelectorAll('.btnNum');
const disp = document.getElementById('display');

//Number Buttons Functionality
btnNum.forEach((button) => {
 
    button.addEventListener('click', () => {
        if (input1Arr.length >= 10){
            return;
        } 
        else {
            input1Arr.push(button.innerHTML);
            input1 = parseFloat(input1Arr.join(''));
            console.log(input1);
            disp.innerHTML = input1;
        }              
    });
});


//Backspace functionality
document.getElementById('backspace').addEventListener('click', () => {

    input1Arr.pop();
    
    if(input1Arr.length === 0) {
        input1 = 0
    }
    else {
        input1 = parseFloat(input1Arr.join(''));
    }
    console.log(input1);
    disp.innerHTML = input1;
})


//Addition
document.getElementById('plus').addEventListener('click', add);

function add() {
    input1Arr = [];

    if (input2 === 0) {
        disp.innerHTML = input2;
        sum();
    }
    else {
        sum();
        disp.innerHTML = input2;
    }
}

function sum() {
    input2 = input1 + input2;
}

//Subtraction
document.getElementById('subt').addEventListener('click', subt);

function subt() {
    input1Arr = [];

    if (input2 === "") {
        disp.innerHTML = input2;
        input2 = input1;
    }
    else {
        diff();
        disp.innerHTML = input2;
    }
}

function diff() {
    input2 = input2 - input1;
}