import React, {useEffect, useRef, useState} from 'react';
import classes from './SpeedTyping.module.css';
import {useSelector} from "react-redux";
import Description from "./Description";
import useConfetti from "../../../hooks/useConfetti";
import ScoreBoard from "./ScoreBoard";
import GameArea from "./GameArea";
import TaskBoard from "./TaskBoard";
import useGame from "../../../hooks/speedTyping/useGame";

const SpeedTypingPage = () => {
    const username = useSelector(state=>state.user.userName);
    const {confettiBlock} = useConfetti();

    const { gameStatus, time, maxTime, wordsNumber,
            textToType, typedText, watchTypedText,
            myRef, handleTyping, getNewText, startGame,
            gameIsRunning, gameNotRunning, gameFinished} = useGame();

    useEffect(()=> {
        watchTypedText();
    }, [typedText])

    useEffect(()=>{
        if(gameStatus.started && !gameStatus.win && time<maxTime){
            gameIsRunning();
        }
        else if(gameStatus.win || time===maxTime){
            gameFinished();
        }
        else if(!gameStatus.started){
            gameNotRunning();
        }

    }, [gameStatus.started, gameStatus.finished, time])


    return (
        <div className={classes.gameBlock}>
            {confettiBlock(gameStatus.win)}

            <div className={classes.mainBlock}>

                <div className={classes.header}>
                    <h1>Welcome to Speed Typing, {username}!</h1>
                </div>

                <section className={classes.topBlock}>
                   <ScoreBoard
                       maxTime={maxTime}
                       time={time}
                       wordsNumber={wordsNumber}
                   />
                   <Description
                        status={gameStatus.status}
                   />
                </section>

                <TaskBoard
                    textToType={textToType}
                />

                <GameArea
                    myRef={myRef}
                    typedText={typedText}
                    handleTyping={handleTyping}
                    gameStatus={gameStatus}
                    getNewText={getNewText}
                    startGame={startGame}
                />

            </div>
        </div>
    );
};

export default SpeedTypingPage;