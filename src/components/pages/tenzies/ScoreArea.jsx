import React,{useEffect} from 'react';
import classes from "./ScoreArea.module.scss";
import useTimer from "../../../hooks/useTimer";


const ScoreArea = ({gameState, setGameState}) => {
    const {time,stopTimer, startTimer, clearTimer} = useTimer();
    const bestTime=localStorage.getItem("tenziesBestTime") ? localStorage.getItem("tenziesBestTime") : 0;

    useEffect(()=>{
        if(gameState.started && !gameState.finished){
            startTimer();
        }
         else if(gameState.finished){
            stopTimer();
             if(time<bestTime || bestTime<=0){
                setGameState(prev=>({...prev, record: true}));
                localStorage.setItem("tenziesBestTime", time);
            }
        }
         else if(!gameState.started){
            clearTimer();
        }
    }, [gameState.started, gameState.finished]);



    return (
        <div className={classes.score}>
            <div className={classes.score__results}>
                <span className={classes.score__results__title}>Best result:</span>
                <span className={classes.score__results__count}> {bestTime} sec</span>
            </div>
            <div className={classes.score__results}>
                <span className={classes.score__results__title}>Your result:</span>
                <span className={classes.score__results__count}>{time} sec</span>
            </div>
        </div>
    );
};

export default ScoreArea;