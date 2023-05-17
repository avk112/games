import React, {useEffect} from 'react';
import useTimer from "../../../hooks/useTimer";
import classes from "./ScoreArea.module.scss";
import {useSelector} from "react-redux";

const ScoreArea = ({gameState, setGameState}) => {
    const maxTime = useSelector(state=>state.speedTypingScore.maxTime);
    const wordsToType = useSelector(state=> state.speedTypingScore.wordsToType);
    const typedWords = useSelector(state=> state.speedTypingScore.typedWords);

    const {time,stopTimer, startTimer, clearTimer} = useTimer(maxTime, -1, ()=>setGameState(prev=>({...prev, finished: true})));


    useEffect(()=>{
        if(gameState.started && !gameState.finished){
            startTimer();
        }
        if(gameState.finished){
            stopTimer();
            time>0 && setGameState(prev=>({...prev, record: true}));
        }
        if(!gameState.started && !gameState.finished){
            clearTimer();
        }

    }, [gameState.started, gameState.finished]);



    return (
        <div className={classes.score}>
            <div className={classes.score__results}>
                <span className={classes.score__results__title}>Correct words:</span>
                <span className={classes.score__results__count}> {typedWords}/{wordsToType}</span>
            </div>
            <div className={classes.score__results}>
                <span className={classes.score__results__title}>Time remained:</span>
                <span className={classes.score__results__count}>{time} sec</span>
            </div>
        </div>
    );
};

export default ScoreArea;