
//Global Variables
let input1 = 0;
let input2 = "";
let input1Arr = [];
let memory = 0;

let eval = 0; //1=add, 2=subt, 3=mult, 4=divd

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

//Clear Button
document.getElementById('clear').addEventListener('click', () => {

    input1Arr = [];
    input1 = 0;
    input2 = "";
    disp.innerHTML = "";
})

//Memory Button
document.getElementById('memory').addEventListener('click', () => {
    memory = input1;
    input1Arr = [];
    input1 = 0;
    input2 = "";
})

//Memory Recall
document.getElementById('memRec').addEventListener('click', () => {
    input1 = memory;
    disp.innerHTML = input1;
})

//Addition
document.getElementById('plus').addEventListener('click', add);

function add() {
    input1Arr = [];

    if (input2 === "") {
        disp.innerHTML = input2;
        input2 = input1;
    }
    else {
        sum();        
    }
}

function sum() {
    input2 = parseFloat(input1) + parseFloat(input2);
    disp.innerHTML = input2;
    eval = 1;
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
    }
}

function diff() {
    input2 = input2 - input1;
    disp.innerHTML = input2;
    eval = 2;
}

//Multiplication
document.getElementById('mult').addEventListener('click', mult);

function mult() {
    input1Arr = [];

    if (input2 === "") {
        disp.innerHTML = input2;
        input2 = input1;
    }
    else {
        prod();
    }
}

function prod() {
    input2 = input2 * input1;

    if(input2 > 9999999999) {
        disp.innerHTML = "OVERFLOW!";
        input1Arr = [];
        input1 = 0;
        input2 = "";
    }
    else {
        disp.innerHTML = input2;
    }

    eval = 3;    
}

//division
document.getElementById('divd').addEventListener('click', divd);

function divd() {
    input1Arr = [];

    if (input2 === "") {
        disp.innerHTML = input2;
        input2 = input1;
    }
    else {
        qout(); 
    }
}

function qout() {
    if (input1 === 0){
        disp.innerHTML = "ERROR!";
        input1Arr = [];
        input1 = 0;
        input2 = "";
    }
    else {
        input2 = input2 / input1;
        input2 = parseFloat(input2.toFixed(3));
        disp.innerHTML = input2;
    }
    eval = 4;
}