
const opAdd = 1;
const opSub = 2;
const opMul = 3;
const opDiv = 4;

let n1 = 0;
let n2 = 0;

let currentN = 0;

let screenString = 0;

function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;af
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
            add(a, b);
            break;
        case opSub:
            sub(a, b);
            break;
        case opMul:
            mul(a, b);
            break;
        case opDiv:
            div(a, b);
            break;
    }
}

const screen = document.querySelector("#screen");

const numsClass = document.querySelectorAll(".nums");

numsClass.forEach(item => {
    item.addEventListener("click", () => {
        screen.textContent += item.textContent;
    })
})

// const button0 = document.querySelector("#zero");
// const button1 = document.querySelector("#one");
// const button2 = document.querySelector("#two");
// const button3 = document.querySelector("#three");
// const button4 = document.querySelector("#four");
// const button5 = document.querySelector("#five");
// const button6 = document.querySelector("#six");
// const button7 = document.querySelector("#seven");
// const button8 = document.querySelector("#eight");
// const button9 = document.querySelector("#nine");

// const buttonAdd = document.querySelector("#add");
// const buttonSub = document.querySelector("#sub");
// const buttonMul = document.querySelector("#mul");
// const buttonDiv = document.querySelector("#div");

// const buttonDot = document.querySelector("#dot");
// const buttonSign = document.querySelector("#sign");

// const buttonAC = document.querySelector("#AC");
// const buttonEqual = document.querySelector("#equal");


// button0.addEventListener("click", () => {
//     screenString += "0";
//     screen.textContent = screenString;
// })

// button1.addEventListener("click", () => {
//     screenString += "1";
//     screen.textContent = screenString;
// })

// button2.addEventListener("click", () => {
//     screenString += "2";
//     screen.textContent = screenString;
// })


// button3.addEventListener("click", () => {
//     screenString += "3";
//     screen.textContent = screenString;
// })


// button4.addEventListener("click", () => {
//     screenString += "4";
//     screen.textContent = screenString;
// })


// button5.addEventListener("click", () => {
//     screenString += "5";
//     screen.textContent = screenString;
// })


// button6.addEventListener("click", () => {
//     screenString += "6";
//     screen.textContent = screenString;
// })


// button7.addEventListener("click", () => {
//     screenString += "7";
//     screen.textContent = screenString;
// })


// button8.addEventListener("click", () => {
//     screenString += "8";
//     screen.textContent = screenString;
// })


// button9.addEventListener("click", () => {
//     screenString += "9";
//     screen.textContent = screenString;
// })
