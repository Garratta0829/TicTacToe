



const playerFactory = (name, marker) => {
    return {name, marker}
}



const Game = (() => {
    let gameboard = ['','','','','','','','','',]
    // let gameboard = []
    const board = document.querySelector('.gameboard')
    let gameOver = false
    const playerTurn = document.querySelector('.player-turn')

    const player1 = playerFactory('Player1', 'cross')
    const player2 = playerFactory('Player2', 'circle')
    
    let activePlayer = player1
    // let squares
    let squares = document.getElementsByClassName('square')
        console.log(squares)
  
    let winnerDeclared = false
    let mark

    const restartBtn = document.querySelector('.restart')

    restartBtn.addEventListener('click', ()=> {
        let gameboard = ['','','','','','','','','',]
        // board = ''
        console.log(board)
        console.log(gameboard)
        console.log(squares)
        for(let i=0; i < squares.length; i++) {
            // if (squares[i].contains(mark)) {
                squares[i].classlist.remove(mark)
            // }
            //  squares += i
            
        }

        // Array.from(squares)
        // squares.forEach((square) => {
        //     square.remove(mark)
        // })
        // console.log(squares)


        // board.forEach((square) => {
        //     square.classList.remove(mark)
        // })

    })

    // for(let i=0; i <= board.length; i++) {
    //     gameboard.push('')
    //     i
    // }
        

   
    const render = () => {

        
        
        for (let i = 0; i < gameboard.length; i++) {
            const square = document.createElement('div')
            square.classList.add('square')
            // let squares = querySelectorAll('.square')
            
            // console.log(squares)
            square.id = i
            playerTurn.innerText = `${activePlayer.name}'s Turn!`
            if (Game.winnerDeclared === true) {
                square.style.pointerEvents = 'none'
            }
            square.addEventListener("click", () => {
                
               
                
                mark = document.createElement('div')
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
                // if game is over, disable pointer events/ click ability
                gameEnd()
                // console.log(gameboard)
                console.log(board)

      
            })
            // squares += square
            board.append(square)
            
           
        }}

        

       const noMove = () => {
        for(let i=0; i < squares.length; i++) {
            squares[i].style.pointerEvents = 'none'
        }
       }        
               
                
                
        
    

    const gameEnd = () => {
        if (Game.winnerDeclared === true) {
            Game.noMove()
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
        gameEnd,
        winnerDeclared,
        noMove
    
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
        if (Game.gameboard[item[0]] === 'cross' && 
            Game.gameboard[item[1]] === 'cross' && 
            Game.gameboard[item[2]] === 'cross')
    {
        // gameIsOver = true
        Game.winnerDeclared = true
        Game.playerTurn.innerText = `Player1 wins!`
        console.log(`Player1 wins!`)

    } else if (
            Game.gameboard[item[0]] === 'circle' && 
            Game.gameboard[item[1]] === 'circle' && 
            Game.gameboard[item[2]] === 'circle') {

        Game.winnerDeclared = true
        Game.playerTurn.innerText = `Player2 wins!`
        console.log(`Player2 wins!`)
    }}
    
})}


    const checkForTie = () => {
    for (let i = 0; i <= Game.gameboard.length; i++) {
        if (Game.gameboard[0] !== '' && Game.gameboard[1] !== '' && Game.gameboard[2] !== '' && 
            Game.gameboard[3] !== '' && Game.gameboard[4] !== '' && Game.gameboard[5] !== '' && 
            Game.gameboard[6] !== '' && Game.gameboard[7] !== '' && Game.gameboard[8] !== '') {
                    
        Game.playerTurn.innerText = 'Tie Game'
    }}}


      
    return {

        checkWinner,
        checkForTie,

    };

})();



// const click = () => {
//     // for (let i=0; i < board.length; i++) {
//     board.forEach((square) => {
//         // console.log(square.id)
//         gameboard.push('')
//         square.addEventListener("click", (e) => {
            
           

//             const mark = document.createElement('div')
//         // marks += mark
//         mark.classList.add(activePlayer.marker)
//         square.append(mark)
//         // console.log(board.id)
//         square.style.pointerEvents = 'none'
//         gameboard[e.target.id] = activePlayer.marker
        
//         activePlayer = activePlayer === player1 ? player2 : player1
//         playerTurn.innerText = `${activePlayer.name}'s Turn!`
//         GameController.checkForTie()
//         GameController.checkWinner()
//         gameEnd()
//         console.log(gameboard)
//         // console.log(squares)
//         // console.log(marks)
//         // console.log(board)

        
            
        
        
//     }) 


//     })