

const playerFactory = (name, marker) => {
    return {name, marker}
}

const player1 = playerFactory('player1', 'cross')
const player2 = playerFactory('player2', 'circle')

let activePlayer = player1
console.log(activePlayer)


const Gameboard = (() => {
    let gameboard = ['','','','','','','','','',]
    const board = document.querySelector('.gameboard')
    

    const addMark = (e) => {
        
    }

    const playRound = () => {

        
    }

    
    
    const render = () => {

        for (let i = 0; i < gameboard.length; i++) {
            const square = document.createElement('div')
            square.classList.add('square')
            square.id = i
            square.addEventListener('click', () => {

                const mark = document.createElement('div')
                mark.classList.add(activePlayer.marker)
                square.append(mark)
                gameboard[i] = activePlayer.marker
                activePlayer = activePlayer === player1 ? player2 : player1
                square.style.pointerEvents = 'none'
                console.log(gameboard)
                // GameController.checkWinner()

            })
            
            board.append(square)
            
        }
        // console.log(gameboard) 
    }

    // GameController.checkWinner()
    return {
        render,
        gameboard,
        board,
    }

})();

Gameboard.render()



const GameController = (() => {

   

    // write a function that puts player.marker into gameboard array
    // gameboard[i] += activePlayer.marker
    const playRound = () => {
        gameboard[i] = activePlayer.marker
        activePlayer = activePlayer === player1 ? player2 : player1
        console.log(gameboard)
    }
   
    
    // const checkScore = () = {}

        // separate check score function from the array of win combos
     
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

        // const example = [
        //     [cross, cross, cross]
        //     [circle, cross, circle]
        //     [circle, circle, circle]
        // ]
    
        const checkWinner = () => {
        winCombos.forEach((item, index) => {
            for (let i = 0; i <= item.length; i++) {
                if (Gameboard.gameboard[item[0]] === activePlayer.marker && Gameboard.gameboard[item[1]] === activePlayer.marker && Gameboard.gameboard[item[2]] === activePlayer.marker)
            {console.log(`${activePlayer} wins`)}
            }
            
        })}
    
     
    // function restart() {
    //     Gameboard.gameboard = ['','','','','','','','','',]
    //     Gameboard.gameboard = ''
    // }


    return {
        restart,
        activePlayer,
        playRound,
        checkWinner,
        activePlayer
    }

})();

GameController.checkWinner()


// this will deal with the UI, what text is popping up, etc
const DisplayController = (() => {
    const playerTurn = document.querySelector('.player-turn') 

   
    
    
    return {
        playerTurn,

    }


})();

DisplayController.playerTurn.innerText = 'hello'






// if (winCombos[i] === gameboard[i]) {
//     declare winner
// }



 // if (go === 'circle') {
        //     gameboard[i] = 1
        //     console.log(gameboard[i])
        //  } else if (go === 'cross') {
        //     gameboard[i] = 2
        //     console.log(gameboard[i])
        //  }

