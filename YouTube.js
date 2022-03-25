const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


/* comment methodu */
//sadece satır olarak youm satırı oluşturur.

//
function getUserNumberInput() {
    return parseInt(userInput.value);
}
//
function creatwAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);   
}
function writeToLog(
    operationIdentifer,
    prevResult,
    operationNumber,
    newResult
    ) 
    {
        const logEntry = {  // bu olayı tam anlayamadım bu noktayı danış 
            operation:  operationIdentifer,
            prevResult: prevResult,
            number: operationNumber,
            result: newResult 
        };
        logEntries.push(logEntry);
        console.log(logEntries);

    }


function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;      
    creatwAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
} 

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -=  enteredNumber;      
    creatwAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);


}

function multiply(params) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *=  enteredNumber;      
    creatwAndWriteOutput('*', initialResult, enteredNumber);    
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);

}

function divide(params) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;      
    creatwAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);






