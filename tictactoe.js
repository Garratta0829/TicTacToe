



const playerFactory = (name, marker) => {
    return {name, marker}
}



const Game = (() => {
    let gameboard = ['','','','','','','','','',]
    const board = document.querySelector('.gameboard')
    let gameOver = false
    const playerTurn = document.querySelector('.player-turn')

    const player1 = playerFactory('Player1', 'cross')
    const player2 = playerFactory('Player2', 'circle')
    
    let activePlayer = player1
    // let activePlayer
    
  
    let squares
    let winnerDeclared = false

    const restartBtn = document.querySelector('.restart')

    restartBtn.addEventListener('click', ()=> {
        let gameboard = ['','','','','','','','','',]
        board = ''
        console.log(board)
        render()

        // for (let i = 0; i < gameboard.length; i ++) {
        //     gameboard.update(i, '')
        // }
        // gameOver = true
        // board = ''
        // render()
        // marks.forEach((mark) => {
        //     mark.classList.remove(activePlayer.marker)
        //     // marks = ''
        //     // for (let i = 0; i <= marks.length; i++) {
        //         // mark.remove()
        //         gameboard = ['','','','','','','','','',]
        //         console.log(gameboard)
        //         console.log('click')
        //         // board = ''

        //         ren der()

        //     // }
       
        // }
        // )
    })

    
        

  
    let marks 
   
    const render = () => {

        
        
            for (let i = 0; i < gameboard.length; i++) {
                const square = document.createElement('div')
                square.classList.add('square')
                // let squares = querySelectorAll('.square')
                
                // console.log(squares)
                square.id = i
                playerTurn.innerText = `${activePlayer.name}'s Turn!`
                square.addEventListener("click", () => {
                    
                   
                    
                    const mark = document.createElement('div')
                    // marks += mark
                    mark.classList.add(activePlayer.marker)
                    square.append(mark)
                    
                    square.style.pointerEvents = 'none'
                    gameboard[i] = activePlayer.marker
                    activePlayer = activePlayer === player1 ? player2 : player1
                    // DisplayController.displaySwitch()
                    playerTurn.innerText = `${activePlayer.name}'s Turn!`
                    GameController.checkForTie()
                    GameController.checkWinner()
                    gameEnd()
                    // console.log(activePlayer.marker)
                    // console.log(gameboard)
                    // console.log(activePlayer.name)
                    // console.log(squares)
                    // console.log(marks)
                    console.log(board)
                    
                    
                })
                squares += square
                board.append(square)
                
                
            }   
       return {
        activePlayer
       }
    }
    // console.log(board.childNodes())

    const gameEnd = () => {
        if (Game.winnerDeclared === true) {
            console.log('game Over')
        }
    }

    return {
        render,
        gameboard,
        board,
        activePlayer,
        playerTurn,
        player1,
        player2,
        gameEnd
    }

})();

// board.getchildnodes = squares


const GameController = (() => {

   Game.render()

   const checkWinner = () => {
    const winCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    // Game.activePlayer = Game.activePlayer === Game.player1 ? Game.player2 : Game.player1

    // I think the reason only one player can win is because this function perpetually
    // recognizes activeplayer as the player that is declared active player above
    

  winCombos.forEach((item) => {
    for (let i = 0; i <= item.length; i++) {
        if (Game.gameboard[item[0]] === 'cross' && 
            Game.gameboard[item[1]] === 'cross' && 
            Game.gameboard[item[2]] === 'cross')
    {
        // gameIsOver = true
        Game.winnerDeclared = true
        Game.playerTurn.innerText = `Player1 wins!`
        console.log(`Player1 wins!`)

    } else if (Game.gameboard[item[0]] === 'circle' && 
            Game.gameboard[item[1]] === 'circle' && 
            Game.gameboard[item[2]] === 'circle') {

        Game.winnerDeclared = true
        Game.playerTurn.innerText = `Player2 wins!`
        console.log(`Player2 wins!`)
    }
    }
    
})}


    const checkForTie = () => {
            for (let i = 0; i <= Game.gameboard.length; i++) {
                if (Game.gameboard[0] !== '' && Game.gameboard[1] !== '' && Game.gameboard[2] !== '' && 
                    Game.gameboard[3] !== '' && Game.gameboard[4] !== '' && Game.gameboard[5] !== '' && 
                    Game.gameboard[6] !== '' && Game.gameboard[7] !== '' && Game.gameboard[8] !== '') {
                    
                        Game.playerTurn.innerText = 'Tie Game'

                }
            }     
    }
      
    
    

    return {

        checkWinner,
        checkForTie,
        // activePlayer,
        // winCombos,
        // test,
    };

})();

