












































// let gameboard2 = ['','','','','','','','','',]

// gameboard2[0] = 'x'

// console.log(gameboard2)


const Gameboard = (() => {
    let gameboard = ['','','','','','','','','',]
    const board = document.querySelector('.gameboard')
    let go = 'circle'

    const render = () => {

        for (let i = 0; i < gameboard.length; i++) {
            const square = document.createElement('div')
            square.classList.add('square')
            square.id = i
            square.addEventListener('click', (e) => {
                const mark = document.createElement('div')
                mark.classList.add(go)
                e.target.append(mark)
                console.log(e.target)
                
                go = go === 'circle' ? 'cross' : 'circle'

                if (go === 'circle') {
                    gameboard[i] = 1
                    console.log(gameboard[i])
                 } else if (go === 'cross') {
                    gameboard[i] = 2
                    console.log(gameboard[i])
                 }

                //  gameboard[i] = 'x'
                 
                //  if (square.contains)

               

                console.log(gameboard)

                // e.target.removeEventListener('click', addMark)
            })
            
            //  console.log(gameboard)
        

            board.append(square)
        }

        // gameboard.forEach((_cell, index) => {
           
            console.log(gameboard)
            
        // })
        // console.log(gameboard)
    }


// function addMark(e) {
// }
    return {
        render,
        gameboard,
        board
    }
})();

Gameboard.render()

const GameController = (() => {
    for (let i=0; i <= gameboard.length; i++) {

    }

})();


const DisplayController = (() => {
    const playerTurn = document.querySelector('.player-turn') 

    const playerFactory = (name, marker) => {
        return {name, marker}
    }
    
    const player1 = playerFactory('player1', 'X')
    const player2 = playerFactory('player2', 'O')
    
    
    return {
        playerTurn,

    }


})();

DisplayController.playerTurn.innerText = 'hello'




// const AddMark = ((e) => {
//     const mark = document.createElement('div')
//     mark.classList.add('circle')
//     e.target.append(mark)

// })();

// if (winCombos[i] === gameboard[i]) {
//     declare winner
// }

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
    // if ()
}
 


function restart() {
    Gameboard.gameboard = ['','','','','','','','','',]
    Gameboard.gameboard = ''
}



