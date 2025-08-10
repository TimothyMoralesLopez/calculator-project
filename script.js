let firstNum = "";
let firstNumDeclared = false;
let secondNumDeclared = false; 
let secondNum = ""; 
let operatorSymbol = ""; 
let resultNum;
let symbolDeclared = false; 
let operationComplete = false;
let errorReceived = false; 

function addNums(a, b) {
    return Number(a) + Number(b);
}

function subtractNums(a, b) {
    return a - b; 
}

function multiplyNums(a, b) {
    return a * b;
}

function divideNums(a, b) {
    if (b != 0)
    {
        return a / b; 
    }
    else {
        displayDivisionError();
        clearCalc(); 
        errorReceived = true;
        operationComplete = false; 
        
    }
}

function displayDivisionError() {
    alert("Divison by zero is not possible! Please try again!"); 
    updateDisplayDiv(); 
}

function operate(a, o, b) {
    switch (o) {
        case "+":
            return addNums(a, b);
            break;
        case "-":
            return subtractNums(a, b);
            break;
        case "*":
            return multiplyNums(a, b);
            break;
        case "/":
            return divideNums(a, b); 
            break; 
    }
}

function updateNums(num) {

    if(!symbolDeclared && !firstNumDeclared) {
        firstNum += num;
    }
    else if (symbolDeclared && !secondNumDeclared) {
        secondNum += num;
    }
}

function updateOperator(symbol) {
    if (!symbolDeclared && firstNum != "") {
        operatorSymbol = symbol;
        symbolDeclared = true;
        firstNumDeclared = true; 
    }
    else if (firstNumDeclared && symbolDeclared && secondNum != "" && !secondNumDeclared) {
        secondNumDeclared = true;
    }
    if (symbolDeclared && firstNumDeclared && secondNumDeclared) {
        firstNum = operate(firstNum, operatorSymbol, secondNum);
        operatorSymbol = symbol; 
        secondNum = "";
        secondNumDeclared = false; 
        resultNum = 0; 
        operationComplete = false; 
    }
}

function updateResult(num) {
    if (errorReceived) {
        operationComplete = false;
    }
    else if (!errorReceived) {
        operationComplete = true;
    }
    resultNum = num; 
}

function updateDisplayDiv() {
    if (!operationComplete) {
        myDisplayDiv.textContent = firstNum + " " + operatorSymbol + " " + secondNum; 
    }
    else if (operationComplete) {
        myDisplayDiv.textContent = resultNum; 
    }
}

function clearCalc() {
    firstNum = "";
    secondNum = ""; 
    operatorSymbol = ""; 
    resultNum = 0;
    firstNumDeclared = false;
    secondNumDeclared = false; 
    symbolDeclared = false; 
    operationComplete = false;
    errorReceived = false;
    
}

const myDisplayDiv = document.querySelector(".displayDiv");

const myOneButton = document.querySelector(".oneButton"); 
const myTwoButton = document.querySelector(".twoButton"); 
const myThreeButton = document.querySelector(".threeButton"); 
const myFourButton = document.querySelector(".fourButton"); 
const myFiveButton = document.querySelector(".fiveButton"); 
const mySixButton = document.querySelector(".sixButton"); 
const mySevenButton = document.querySelector(".sevenButton"); 
const myEightButton = document.querySelector(".eightButton"); 
const myNineButton = document.querySelector(".nineButton"); 
const myZeroButton = document.querySelector(".zeroButton"); 

const myAddButton = document.querySelector(".addButton"); 
const mySubtractButton = document.querySelector(".subtractButton"); 
const myMultiplyButton = document.querySelector(".multiplyButton"); 
const myDivideButton = document.querySelector(".divideButton"); 
const myEqualButton = document.querySelector(".equalButton"); 

const myClearButton = document.querySelector(".clearButton"); 

myOneButton.addEventListener("click", function() {
    updateNums("1"); 
    updateDisplayDiv(); 
}); 
myTwoButton.addEventListener("click", function() {
    updateNums("2"); 
    updateDisplayDiv(); 
}); 
myThreeButton.addEventListener("click", function() {
    updateNums("3"); 
    updateDisplayDiv(); 
}); 
myFourButton.addEventListener("click", function() {
    updateNums("4"); 
    updateDisplayDiv(); 
}); 
myFiveButton.addEventListener("click", function() {
    updateNums("5"); 
    updateDisplayDiv(); 
}); 
mySixButton.addEventListener("click", function() {
    updateNums("6"); 
    updateDisplayDiv(); 
}); 
mySevenButton.addEventListener("click", function() {
    updateNums("7"); 
    updateDisplayDiv(); 
}); 
myEightButton.addEventListener("click", function() {
    updateNums("8"); 
    updateDisplayDiv(); 
}); 
myNineButton.addEventListener("click", function() {
    updateNums("9"); 
    updateDisplayDiv(); 
}); 
myZeroButton.addEventListener("click", function() {
    updateNums("0"); 
    updateDisplayDiv(); 
}); 

myAddButton.addEventListener("click", function() {
    updateOperator("+");
    if(errorReceived) {
        clearCalc(); 
    }
    updateDisplayDiv(); 
});

mySubtractButton.addEventListener("click", function() {
    updateOperator("-");
    if(errorReceived) {
        clearCalc(); 
    }
    updateDisplayDiv(); 
});

myMultiplyButton.addEventListener("click", function() {
    updateOperator("*");
    if(errorReceived) {
        clearCalc(); 
    }
    updateDisplayDiv(); 
});

myDivideButton.addEventListener("click", function() {
    updateOperator("/");
    if(errorReceived) {
        clearCalc(); 
    }
    updateDisplayDiv(); 
});

myEqualButton.addEventListener("click", function() {
    if (firstNumDeclared && symbolDeclared && !secondNumDeclared){
        secondNumDeclared = true; 
    }
    if (firstNumDeclared && symbolDeclared && secondNumDeclared) {
        updateResult(operate(firstNum, operatorSymbol, secondNum));
        errorReceived = false; 
        updateDisplayDiv();
    }
});

myClearButton.addEventListener("click", function() {
    clearCalc();
    updateDisplayDiv(); 
});

