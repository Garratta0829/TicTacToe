



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

    let activePlayer = player1
    // const gameStop = () => {
    //     if (gameIsOver) {
    //         square.removeEventListener('click')
    //     }
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
    const test = () => {
        console.log('this works')
    }
    
   
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
                GameController.checkWinner()
                console.log(gameboard)
                
                
                
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
        test
    }

})();



const GameController = (() => {

   Game.render()

   
   Game.test()
  
   


    const doStuff = () => {
   
    }
    
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
            if (Game.gameboard[item[0]] === Game.activePlayer.marker && Game.gameboard[item[1]] === Game.activePlayer.marker && Game.gameboard[item[2]] === Game.activePlayer.marker)
        {
            // gameIsOver = true
            Game.playerTurn.innerText = `${Game.activePlayer.name} wins!`
            console.log(`${Game.activePlayer.name} wins!`)
        }
        }
        
    })
        
    }
      
    
    

    return {

        checkWinner,
        doStuff,
        // activePlayer,
        // winCombos,
        // test,
    };

})();






// this will deal with the UI, what text is popping up, etc
const DisplayController = (() => {
    const playerTurn = document.querySelector('.player-turn') 

   
     return {
        playerTurn,

    }

})();

DisplayController.playerTurn.innerText = 'hello'


//   const declareWinner = () => {

//     if (gameIsOver === true) {
//         playerTurn.innerText = `${activePlayer.name} wins!`
//         console.log(`${activePlayer.name} wins!`)
//     }

//   }