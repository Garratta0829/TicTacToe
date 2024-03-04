



const playerFactory = (name, marker) => {
    return {name, marker}
}



const Game = (() => {
    let gameboard = ['','','','','','','','','',]
    const board = document.querySelector('.gameboard')
    const playerTurn = document.querySelector('.player-turn')
    const restartBtn = document.querySelector('.restart')

    const player1 = playerFactory('Player1', 'cross')
    const player2 = playerFactory('Player2', 'circle')
    
    let activePlayer = player1
    let squares = document.getElementsByClassName('square')
    // let circles = document.getElementsByClassName('circle')
    // let crosses = document.getElementsByClassName('crosses')
    let winnerDeclared = false
    let mark
    let squareArray = Array.from(squares)
    console.log(squareArray)
    console.log(squares)

    

    restartBtn.addEventListener('click', ()=> {
        let gameboard = ['','','','','','','','','',]
        // board = ''
        // console.log(board)
        console.log(gameboard)
        // console.log(squares)
        for(let i=0; i < squares.length; i++) {

            console.log(squares[i])
            squares[i].innerHTML = ''
            squares[i].style.pointerEvents = 'all'
            
        }
        Game.winnerDeclared = false
            activePlayer = player1
            playerTurn.innerText = `${activePlayer.name}'s Turn!`
        //     if (squares[i].contains(mark)) {
        //         if (squares[i].contains('')) {
        //             squares[i].classList.remove('square')
        //         }
            //     squares.forEach(function(square) {
            //         square.remove()
            //    })
                    

            // Array.prototype.forEach.call(squares, funcion {
            //     square.remove()
            // })

            }

            
      
            
        // }
        // for(let i=0; i < squares.length; i++) {
        //     squares[i].classlist.remove('square')

        // }
        // render()
        
    )





   
    const render = () => {

        for (let i = 0; i < gameboard.length; i++) {
            const square = document.createElement('div')
            square.classList.add('square')
            square.id = i
            playerTurn.innerText = `${activePlayer.name}'s Turn!`
            square.addEventListener("click", () => {
                
                mark = document.createElement('div')
                mark.classList.add(activePlayer.marker)
                square.append(mark)
                square.style.pointerEvents = 'none'
                gameboard[i] = activePlayer.marker
                activePlayer = activePlayer === player1 ? player2 : player1
                playerTurn.innerText = `${activePlayer.name}'s Turn!`
                GameController.checkForTie()
                GameController.checkWinner()
                gameEnd()
                console.log(board)

      
            })

            board.append(square)
            
        }}

        
    const disableClick = () => {
        for(let i=0; i < squares.length; i++) {
            squares[i].style.pointerEvents = 'none'
        }
       }        
               
                
                
    const gameEnd = () => {
        if (Game.winnerDeclared === true) {
            Game.disableClick()
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
        disableClick
    
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

