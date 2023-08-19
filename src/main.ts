import './style.css'

let currentPlayer: 'X' | 'O' = 'X'
let moveCounter = 0
const header = document.querySelector('h1')

function handleClickSquare(event: MouseEvent) {
  const thingClickedOn = event.target
  if (thingClickedOn instanceof HTMLLIElement) {
    if (thingClickedOn.classList.contains('taken')) {
      window.alert('This square is taken.')
      return
    }

    thingClickedOn.textContent = currentPlayer
    thingClickedOn.classList.add('taken')
    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }
    moveCounter++
    if (header instanceof HTMLElement) {
      header.textContent = `Move ${moveCounter} of Tic Tac Toe`
    }
  }
}

const allSquares = document.querySelectorAll('li')

allSquares.forEach((square) =>
  square.addEventListener('click', handleClickSquare)
)
