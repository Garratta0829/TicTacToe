



const playerFactory = (name, marker) => {
    return {name, marker}
}


// console.log(activePlayer)



const Game = (() => {
    let gameboard = ['','','','','','','','','',]
    const board = document.querySelector('.gameboard')
    let gameIsOver = false
    const playerTurn = document.querySelector('.player-turn')

    const player1 = playerFactory('player1', 'cross')
    const player2 = playerFactory('player2', 'circle')
    // let activePlayer
    let activePlayer = player1
    // const gameStop = () => {
    //     if (gameIsOver) {
    //         square.removeEventListener('click')
    //     }
    // }

    // const gameOver = () => {
    //     if 
    // }
  

    const restartBtn = document.querySelector('.restart')
    restartBtn.addEventListener('click', ()=> {
        // mark.classList.remove(activePlayer.marker)
        gameboard = ['','','','','','','','','',]
        console.log(gameboard)
        console.log('click')
        render()
    })

    // GameController.test()
  
    
   
    const render = () => {

        for (let i = 0; i < gameboard.length; i++) {
            const square = document.createElement('div')
            square.classList.add('square')
            square.id = i
            square.addEventListener("click", () => {
                
                const mark = document.createElement('div')
                mark.classList.add(activePlayer.marker)
                square.append(mark)
                
                square.style.pointerEvents = 'none'
                gameboard[i] = activePlayer.marker
                activePlayer = activePlayer === player1 ? player2 : player1
                // DisplayController.displaySwitch()
                playerTurn.innerText = `${activePlayer.name}'s Turn!`
                GameController.checkForTie()
                GameController.checkWinner()
                console.log(gameboard)
                console.log(activePlayer.name)
                
                
                
            })
            
            board.append(square)
            
        }

            // const squares = document.querySelectorAll('.square')
            // squares.forEach((square) => 
            
            
        
           
                
            // console.log(square)
                
            
            // square.addEventListener('click', GameController.doStuff)
        
        
    }

   
    
    return {
        render,
        gameboard,
        board,
        activePlayer,
        playerTurn,
        player1,
        player2,
    }

})();



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
    
      winCombos.forEach((item) => {
        for (let i = 0; i <= item.length; i++) {
            if (Game.gameboard[item[0]] === Game.activePlayer.marker && 
                Game.gameboard[item[1]] === Game.activePlayer.marker && 
                Game.gameboard[item[2]] === Game.activePlayer.marker)
        {
            // gameIsOver = true
            winnerDeclared = true
            Game.playerTurn.innerText = `${Game.activePlayer.name} wins!`
            console.log(`${Game.activePlayer.name} wins!`)
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






// this will deal with the UI, what text is popping up, etc
const DisplayController = (() => {
    // const playerTurn = document.querySelector('.player-turn') 

    // Game.activePlayer = Game.activePlayer === Game.player1 ? Game.player2 : Game.player1
    const turn = () => {

    }
    Game.playerTurn.innerText = `${Game.activePlayer.name}'s Turn!`

    const displaySwitch = () => {
        
        Game.playerTurn.innerText = `${Game.activePlayer.name}'s Turn!`
    }

    const changePlayer = () => {
        Game.playerTurn.innerText = Game.activePlayer.name
    }
   
     return {
        // playerTurn,
        displaySwitch,
        changePlayer,

    }

})();

// DisplayController.playerTurn.innerText = 'hello'


//   const declareWinner = () => {

//     if (gameIsOver === true) {
//         playerTurn.innerText = `${activePlayer.name} wins!`
//         console.log(`${activePlayer.name} wins!`)
//     }

//   }