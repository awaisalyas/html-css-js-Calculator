// let firstnumber
// let secondnumber
// let result
// let operation
// let display = document.getElementById('display');



// function number(num){
//     display.value += num
// }

// function operator(op){
//     display.value += op
// }

// let values = display.value;
// let resultInt = parseFloat(values)
// let arr = [];

// for(let i = 0; i< resultInt; i++){
//     arr.push(resultInt[i])
// }


// function calulate(values){
//     console.log(display.value)
//     console.log(arr);
//     // console.log((display.value) + 2)
//     // display.value + 1;
//     console.log(typeof resultInt)
//     console.log(resultInt)
//     // display.value = number(display.value);
// }

let firstNumber
let secondNumber
let step = 0
let operation
let op
let result = 0

let numArray = []
let secondNumberArr = []

let display = document.getElementById('display')

function number(num) {
	if (step === 0 || step === 1) {
		numArray.push(num)
		step = 1
		firstNumber = Number(numArray.join(''))
		display.value = firstNumber
	} else if (step === 2) {
		secondNumberArr.push(num)
		secondNumber = Number(secondNumberArr.join(''))
		display.value = secondNumber
	}
}

function operator(op) {
	step = 2
	operation = op
}

function calculate() {
	console.log('first number', firstNumber, 'second number', secondNumber)
	if (operation === '+') {
		result = firstNumber + secondNumber
		display.value = result
	} else if (operation === '-') {
		result = firstNumber - secondNumber
		display.value = result
	} else if (operation === '*') {
		result = firstNumber * secondNumber
		display.value = result
	} else if (operation === '/') {
		result = firstNumber / secondNumber
		display.value = result
	}
}

function clearDisplay() {
	display.value = 0
	firstNumber = null
	secondNumber = null
	step = 0
	operation = null
	result = 0
	numArray = []
	secondNumberArr = []
}