
const opAdd = "add";
const opSub = "sub";
const opMul = "mul";
const opDiv = "div";

const n1 = 0;
const n2 = 1;

let number1 = "0";
let number2 = "";

let numbers = [number1, number2];
let currentN = 0;

let operation = "";

let floating = false;

function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}

function operate(op, a, b) {
    switch (op) {
        case opAdd:
            return add(a, b);
        case opSub:
            return sub(a, b);
        case opMul:
            return mul(a, b);
        case opDiv:
            return div(a, b);
    }
}

function addToScreen(item) {
    screen.textContent += item;
}

function putToScreen(item) {
    screen.textContent = item;
}

function insert(item) {
    numbers[currentN] += item;
}
function setCurrentN(x) {
    currentN = x;
}


const screen = document.querySelector("#screen");

const numsClass = document.querySelectorAll(".nums");
numsClass.forEach(item => {

    item.addEventListener("click", () => {

        
        if (screen.textContent == "0") {
            putToScreen(item.textContent);
        }
        else {
            addToScreen(item.textContent);
        }
        insert(item.textContent);
    })
})

const opsClass = document.querySelectorAll(".ops");
opsClass.forEach(item => {

    item.addEventListener("click", () => {

    

        if (currentN == n1) {
            setCurrentN(n2);
        }
        else {
            if (numbers[n2] != "") {
                numbers[n1] = operate(operation, parseFloat(numbers[n1])
                                                , parseFloat(numbers[n2])) + "";
            }
            putToScreen(parseFloat(numbers[n1]));
            numbers[n2] = "";
        }
        addToScreen(item.textContent);
        operation = item.getAttribute("id");
        floating = false;
    })
})

const buttonEqual = document.querySelector("#equal");
buttonEqual.addEventListener("click", () => {

    if (numbers[n2] != "") {

        let temp = operate(operation, parseFloat(numbers[n1]) , parseFloat(numbers[n2]));
        numbers[n1] = temp.toFixed(4) + "";
    }
    
    putToScreen(parseFloat(numbers[n1]));
    numbers[n2] = "";
    setCurrentN(n1);
    floating = false;
})

const buttonAC = document.querySelector("#AC");
buttonAC.addEventListener("click", () => {
    setCurrentN(n1);
    numbers[n1] = "0";
    numbers[n2] = "";

    putToScreen("0");
    operation = "";
})

const buttonDot = document.querySelector("#dot");
buttonDot.addEventListener("click", () => {
    
    let temp = Math.floor(parseFloat(numbers[currentN]));

    if (!floating && temp == numbers[currentN]) {
        floating = true;
        addToScreen('.');
        numbers[currentN] += '.';
    }
})

const buttonSign = document.querySelector("#sign");
buttonSign.addEventListener("click", () => {
    if (currentN == n1) {
        numbers[n1] = -parseFloat(numbers[n1]) + "";
        putToScreen(numbers[n1]);
    }
})