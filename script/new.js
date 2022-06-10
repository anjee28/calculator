let input1 = 0;
let input2 = 0;

let input1Arr = [];

var btnNum = document.querySelectorAll('.btnNum');
const disp = document.getElementById('display');

//Number Buttons Functionality
btnNum.forEach((button) => {
 
    button.addEventListener('click', () => {
        if(input1Arr.length >= 10){
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