
// const selectionButtons = document.querySelectorAll('[data-selection]')
// const computerScoreSpan = document.querySelector('[data-computer-score]')
// const yourScoreSpan = document.querySelector('[data-your-score]')
const finalcolumn = document.querySelector('[data-final-column]')
const resetButton = document.querySelector('[data-selection-reset]');
const start = document.querySelector('[data-selection-start');
const SELECTIONS = [
    {
        name: 'rock',
        imgFile: "ROCK",
        beats: 'scissors'
    },
    {
        name: 'paper',
        imgFile: "PAPER",
        beats: 'rock'
    },
    {
        name: 'scissors',
        imgFile: "SCISSORS",
        beats: 'paper'
    }
]
const user = {
    score: document.querySelectorAll('[data-selection]'),
    display: document.querySelector('[data-your-score]')

}
const computer = {
    score: randomSelection(),
    display: document.querySelector('[data-computer-score]')

}
//function for selecting the image and having the computer run its choice
user.score.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)

        makeSelection(selection)
    })
})

//selection made by the computer
function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}

function makeSelection(selection) {
    const computerChoice = randomSelection()
    const yourWinner = isWinner(selection, computerChoice)
    const computerWinner = isWinner(computerChoice, selection)

    addSelectionResult(computerChoice, computerWinner)
    addSelectionResult(selection, yourWinner)
    if (yourWinner) incrementScore(user.display)
    if (computerWinner) incrementScore(computer.display)

}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}


function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}



function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.imgFile
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalcolumn.after(div)
}



