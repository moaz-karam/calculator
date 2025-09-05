
const addOp = 1;
const subOp = 2;
const mulOp = 3;
const divOp = 4;

let n1 = 0;
let n2 = 0;

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
        case addOp:
            add(a, b);
            break;
        case subOp:
            sub(a, b);
            break;
        case mulOp:
            mul(a, b);
            break;
        case divOp:
            div(a, b);
            break;
    }
}