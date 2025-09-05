
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