let input1 = 0;
let input2 = 0;

let input1Arr = [];

var btnNum = document.querySelectorAll('.btnNum');
const disp = document.getElementById('display');

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
