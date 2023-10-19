let again = 'y'
let validation = 'n'
let userChoice

function playGame (value1, value2) {

    
    switch (value1) {

        case 'rock': {
            if (value2 === 'rock') {
                alert('User choose rock. Computer choose rock. It is a tie.')

            } else if (value2 === 'paper') {
                alert('User choose paper. Computer choose rock. Paper covers rock. User win')

            } else {
                alert('User choose scissors. Computer choose rock. Rock destroys scissors. Computer win.')

            } 

        } break

        case 'paper': {
            if (value2 === 'rock') {
                alert('User choose rock. Computer choose paper. Paper covers rock. Computer win.')

            } else if (value2 === 'paper') {
                alert('User choose paper. Computer choose paper. It is a tie.')

            } else {
                alert('User choose scissors. Computer choose paper. Scissors cut paper. User win.')
                
            } 

        } break

        case 'scissors': {
            if (value2 === 'rock') {
                ('User choose rock. Computer choose scissors. Rock destroys scissors. User win.')

            } else if (value2 === 'paper') {
                alert('User choose paper. Computer choose scissors. Scissors cut paper. Computer win.')

            } else {
                alert('User choose scissors. Computer choose scissors. It is a tie.')
                
            } 

        } break
    }

}

// Phase 1 - User makes a choice

do {

    do {
        userChoice = prompt('Please, select rock, paper or scissors:')

        if ((userChoice === 'rock') || (userChoice === 'paper') || (userChoice === 'scissors') || !isNaN(userChoice)) {
                
            validation = 'y'

        } else {
            
            alert('Please, select valid value (rock, paper or scissors)!')
            validation = 'n'
        }
        

    } while (validation === 'n')

// Phase 2 - Computer makes a choice

    let comChoice = Math.floor(Math.random() * 3)
    let comChoiceValue
    
    if (comChoice == 0) {
        comChoiceValue = 'rock'
    } else if (comChoice == 1) {
        comChoiceValue = 'paper'
    } else {
        comChoiceValue = 'scissors'
    }
    

    playGame(comChoiceValue, userChoice)


    do {
        again = prompt('Run application again? (y or n)', 'y');
        
    } while ((again !== 'n') && (again !== 'y'))

} while (again === 'y');