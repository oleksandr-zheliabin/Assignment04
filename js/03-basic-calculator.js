let again = 'y'
let validation = 'n'

// ADD A FUNCTION CALLED CALCULATE

const calculate = function(num1, num2, operation) {

    switch (operation) {

        case 'add':
            return num1 + num2

        case 'subtract':
            return num1 - num2

        case 'multiply':
            return num1 * num2

        case 'divide':
            return num1/num2
        
    }

}

do {

    do {
    // COLLECT FIRST NUMBER FROM USER

        firstNumber = Number(prompt('Please, enter first number: '))

    // COLLECT SECOND NUMBER FROM USER

        secondNumber = Number(prompt('Please, enter second number: '))

    // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER

        strOperation = prompt('Please, enter operation you would like to perform (add, subtract, multiply, divide): ')

        if ((strOperation === 'add') || (strOperation === 'subtract') || (strOperation === 'multiply') || (strOperation === 'divide') || !isNaN(strOperation)) {
            
            validation = 'y'

        } else {
            
            alert('Please, enter valid operation (add, subtract, multiply, divide)!')
            validation = 'n'
        }

    } while (validation === 'n')

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT

    alert('Result = ' + calculate(firstNumber, secondNumber, strOperation))


    do {
        again = prompt('Run application again? (y or n)', 'y');
        
    } while ((again !== 'n') && (again !== 'y'))

} while (again === 'y');