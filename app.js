let checkButton = document.getElementById('check');
let resetButton = document.getElementById('reset');
var score = document.querySelector('.score')
var highScore = document.querySelector('.highscore');
let inputUser = document.getElementById('inputUser');
let output = document.getElementById('outputtext')
let number = [Math.floor(Math.random() * 20)]

// sir isme mujhe ye bhi bata den score inreament q nhi ho rha or mera reset button pe event kese lagau k jab me reset pe click kru to vo dubara se start kry ?



checkButton.addEventListener('click', function () {
    let inputUser = document.getElementById("inputUser").value;
    if (inputUser === number) {
        output.innerHTML = `congrajulation you win beasue your number is eqaul to ${number}`
        score.textContent = +score.textContent + 1
    }
    else if (input < number) {
        output.innerHTML = `oppss... your number is lower then ${number}`
        score.textContent = +score.textContent - 1
    }
    else if (input > number) {
        output.innerHTML = `oppsss.. your number is greater to ${number} `
        score.textContent = +score.textContent - 1
    }
})
resetButton.addEventListener('click', function () {

})

