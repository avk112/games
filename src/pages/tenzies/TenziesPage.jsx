import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import classes from "./Tenzies.module.css"
import MyButton from "../../components/UI/buttons/MyButton";
import useGameAction from "../../hooks/tenzies/useGameAction";
import useConfetti from "../../hooks/useConfetti";
import useFireworks from "../../hooks/tenzies/useFireworks";
import Cells from "../../components/tenzies/Cells";
import useNumbersArray from "../../hooks/tenzies/useNumbersArray";
import useCellsState from "../../hooks/tenzies/useCellsState";
import ScoreBoard from "../../components/tenzies/ScoreBoard";
import DescriptionBlock from "../../components/tenzies/DescriptionBlock";


const TenziesPage = () => {
    const userName = useSelector(state=>state.user.userName);

    const game = {
        started: false,
        finished:false,
        mainNumber: 0
    }
    const count = 10;
    const [numbersArray, setNumbersArray] = useState([]);
    const [gameState, setGameState] = useState(game);

    const {gameInProcess, gameFinished, gameBackedToStart, time, bestTime, fireworksOn, confettiOn, description, button} = useGameAction();
    const {fireworksBlock} = useFireworks();
    const  {confettiBlock} = useConfetti();
    const {getNewNumbersArray} = useNumbersArray(count, setNumbersArray);
    const {clickOnCell, changeCells} = useCellsState(count, gameState, setGameState, numbersArray, setNumbersArray, getNewNumbersArray);


    useEffect(()=>{
        if(gameState.started && !gameState.finished){
            gameInProcess();
        }
        else if(gameState.finished){
            gameFinished();
        }
        else if(!gameState.started){
            gameBackedToStart();
        }
    }, [gameState.started, gameState.finished, time])

    useEffect(()=>{
        getNewNumbersArray();
    }, [])


    useEffect(()=> {
        const clickedCells = numbersArray.filter(num=>num.isClicked).length;

        if(clickedCells===0) {
            setGameState(game);
        }
         else if(clickedCells===count){
            setGameState(prev => {
                return {...prev, finished: true}
            });
        }
    },[numbersArray])


    return (
        <div className={classes.tenzies}>

            {fireworksBlock(fireworksOn)}
            {confettiBlock(confettiOn)}

            <div className={classes.tenziesGameblock}>
                <h1>Welcome to tenzies, {userName}!</h1>

                <section className={classes.upArea}>
                   <ScoreBoard time={time} bestTime={bestTime} />
                    <DescriptionBlock description={description} />
                </section>

                <Cells numbersArray={numbersArray} click={clickOnCell} />

                <MyButton
                    text={button}
                    click={changeCells}
                />
            </div>
        </div>
    );
};

export default TenziesPage;