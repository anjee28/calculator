let input1 = 0;
let input2 = 0;

let input1Arr = [];

var btnNum = document.querySelectorAll('.btnNum');

btnNum.forEach((button) => {
 
    button.addEventListener('click', () => {
        if(input1Arr.length >= 10){
            return;
        } 
        else {
            input1Arr.push(button.innerHTML);
            input1 = parseInt(input1Arr.join(''));
            console.log(input1);
        }              
    });
});
