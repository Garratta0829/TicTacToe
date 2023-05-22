
let playerOneTurn = true
const board = document.querySelector('.gameboard')
let go = 'circle'





const Gameboard = (() => {
    let gameboard = ['','','','','','','','','',]

    const render = () => {
        gameboard.forEach((_cell, index) => {
            const square = document.createElement('div')
            square.classList.add('square')
            square.id = index
            square.addEventListener('click', addMark)
            board.append(square)
            
        })
        console.log(gameboard)
    }
    return {
        render
    }
})();

Gameboard.render()


const playerFactory = (name, marker) => {
    return {name, marker}
}

const player1 = playerFactory('player1', 'X')
const player2 = playerFactory('player2', 'X')


console.log(player1)

// const AddMark = ((e) => {
//     const mark = document.createElement('div')
//     mark.classList.add('circle')
//     e.target.append(mark)

// })();

function addMark(e) {
    
    const mark = document.createElement('div')
    mark.classList.add(go)
    e.target.append(mark)
    console.log(e.target)
     go = go === 'circle' ? 'cross' : 'circle'
     e.target.removeEventListener('click', addMark)
     checkScore()
}

function checkScore() {
    const winCombos = [
        [0,1,2]
        [3,4,5]
        [6,7,8]
        [0,3,6]
        [1,4,7]
        [2,5,8]
        [0,4,8]
        [2,4,6]
    ]
}
 






// blocks.forEach(block => block.addEventListener('click', () => {
    
//     if (playerOneTurn === true) {
//         block.innerHTML = 'X'
//         block.style.fontSize = '3rem'
//         block.style.display = 'flex'
//         block.style.justifyContent = 'center'
//         block.style.alignItems = 'center'
//         playerOneTurn = false
//     } else if (playerOneTurn === false) {
//         block.innerHTML = '0'
//         block.style.fontSize = '3rem'
//         block.style.display = 'flex'
//         block.style.justifyContent = 'center'
//         block.style.alignItems = 'center'
//         playerOneTurn = true
//     }
    
   
// }))