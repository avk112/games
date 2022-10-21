import React from 'react';

const useCellsState = (count, gameState, setGameState, numbersArray, setNumbersArray, getNewNumbersArray) => {

    const clickOnCell = (cellNum)=> {
        // console.log(gameState);
        if (!gameState.started) {
            setGameState(prevGame => {
                return {...prevGame,
                    started: !prevGame.started,
                    mainNumber: cellNum.num
                }});

        }
        if(!gameState.finished && (gameState.mainNumber===cellNum.num || gameState.mainNumber===0 )){
            setNumbersArray(prev=>{
                return( prev.map(number=>{
                    return number.id===cellNum.id ? {...number, isClicked: !number.isClicked} : number;
                }))
            })
        }
    }

    const changeCells = ()=> {
        if(gameState.finished){
            getNewNumbersArray();
        }
        else {
            const array= numbersArray.map((numb)=>{
                return !numb.isClicked ? ({...numb, num: Math.floor(Math.random()*(count))+1}) : numb;
            })
            setNumbersArray(array);
        }
    }

    return {clickOnCell, changeCells};
};

export default useCellsState;