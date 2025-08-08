let listBtn = document.querySelectorAll('.keys button');
let lastReturn = document.querySelector('.screen .last');
let newReturn = document.querySelector('.screen .new');

let firstNum = null;
let newNum = null;
let calculator = '+';

function reloadScreen (){
    lastReturn.innerText = firstNum ? firstNum + calculator: '';
    newReturn.innerText = newNum ? newNum : ''; 
}
reloadScreen();

listBtn.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.innerText;
        switch (value) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                newNum = newNum ? newNum + value : value;
                break;
                case '.':
                newNum = newNum ? newNum + value : '0.';
                break;
                case '±':
                newNum = -1 * newNum;
                break;
                case '%':
                newNum = 0.01 * newNum;
                break;
                case '+':
                case '×':
                case '-':
                case '÷':
                    if(newNum){
                    if (firstNum){
                            applyCalc();
                        }
                    calculator = value;
                    firstNum = newNum;
                    newNum = null;
                    }
                break;
            case '=':
                applyCalc();
            break;
            default:
            break;
            case 'AC':
            newNum = null;
            firstNum = null; 
            calculator = '+';
            break;
        }
        reloadScreen();

})
});   
function applyCalc(){
    switch (calculator){
        case '÷':
            newNum = (firstNum / newNum);
            break
        case '×':
            newNum = (firstNum * newNum);
            break;
        case '-':
            newNum = firstNum - newNum;
            break;
        case '+':
            newNum = firstNum + newNum;
        break;
    }
}
