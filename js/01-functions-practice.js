//STEP 1

function halfNumber(num1) {

    result = num1 / 2
    console.log('Half of ' + num1 + ' is ' + result)

}

let strNumber1 = Number(prompt('Please, enter number, you would like to divide by 2: '))
halfNumber(strNumber1)

//STEP 2

function squareNumber(num1) {

    result = num1 * num1
    console.log('The result of squaring the number ' + num1 + ' is ' + result)

}

let strNumber2 = Number(prompt('Please, enter number, you would like to square : '))
squareNumber(strNumber2)

//STEP 3

function percentOf(num1, num2) {

    result = (num1 / num2) * 100
    console.log(num1 + ' is ' + result + '% of '+ num2)

}

let strNumber3 = Number(prompt('Please, enter first number, to check percent the first number represents of the second number : '))
let strNumber4 = Number(prompt('Please, enter second number, to check percent the first number represents of the second number : '))
percentOf(strNumber3, strNumber4)

//STEP 4

function findModulus(num1, num2) {

    result = num2 % num1
    console.log(result + ' is the modulus of ' + num1 + ' and ' + num2)

}

let strNumber5 = Number(prompt('Please, enter first number, to check the modulus of the first and second parameters : '))
let strNumber6 = Number(prompt('Please, enter second number, to check the modulus of the first and second parameters : '))
findModulus(strNumber5, strNumber6)