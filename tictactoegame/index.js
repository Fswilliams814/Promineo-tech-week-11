// //assigne a variable for each cell that will hold the 'x' and 'o'
// const cellElements = document.querySelectorAll('[data-cell]')
// //assign varable for the board
// const boardElement = document.getElementById('board')
// //assign variable to the div that holds the winning message to add innerHTML
// const winningMessageElement = document.getElementById('winningMessage')
// //assign varable to the restart button to create a function to restart the game
// const restartButton = document.getElementById('restartButton')
// //assign variable for innerHTML for winning message
// const winningMessageTextElement = document.getElementById('winningMessageText')
// //let isPlayer_O_Turn = false


// //startGame()
// //restarts the game
// restartButton.addEventListener('click', startGame)

// //next we will create the function that starts the game
// function startGame() {
// 	isPlayer_O_Turn = false //setting the this to false means that player x goes first
	
//     cellElements.forEach(cell => {
// 		cell.classList.remove(playerX)
// 		cell.classList.remove(playerO)
// 		cell.removeEventListener('click', controlCell) // we will create a function that controls the mouse clicking on the cell
// 		cell.addEventListener('click', controlCell, { once: true })
// 	})
// 	setBoardHoverClass()
// 	winningMessageElement.classList.remove('show')
// }

// function controlCell(e) {
// 	const cell = e.target
// 	const currentClass = isPlayer_O_Turn ? playerO : playerX
// 	fillInCell(cell, currentClass)
// 	if (checkWin(currentClass)) {
// 		endGame(false)
// 	} else if (isDraw()) {
// 		endGame(true)
// 	} else {
// 		swapTurns() //this function will keep the game going by switching players back and forth if no one wins
// 		setBoardHoverClass()
// 	}
// }

// function endGame(draw) {
//     if(draw){
//         winningMessageTextElement.innerText = "Tie! No Winner"
//     } else {
//         winningMessageTextElement.innerText = `Player with ${isPlayer_O_Turn ? "O'x" : "X's"} wins!`
//     }
//     winningMessageElement.classList.add("show")
// }

// function isDraw() {
// 	return [...cellElements].every(cell => {
// 		return cell.classList.contains(playerX) || cell.classList.contains(playerO)
// 	})
// }

// function fillInCell(cell, currentClass) {
// 	cell.classList.add(currentClass)
// }

// function swapTurns() {
// 	isPlayer_O_Turn = !isPlayer_O_Turn
// }

// //this function was called earlier it makes the game more functional and allow 
// //the player to see their letter in the square before they place it
// function setBoardHoverClass() {
// 	boardElement.classList.remove(playerX)
// 	boardElement.classList.remove(playerO)
// 	if (isPlayer_O_Turn) {
// 		boardElement.classList.add(playerO)
// 	} else {
// 		boardElement.classList.add(playerX)
// 	}
// }

// function checkWin(currentClass) {
// 	return winningCombinations.some(combination => {
// 		return combination.every(index => {
// 			return cellElements[index].classList.contains(currentClass)
// 		})
// 	})
//// }