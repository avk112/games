import React,{useEffect} from 'react';
import styles from "./ScoreArea.module.scss";
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
             if(time<bestTime){
                setGameState(prev=>({...prev, record: true}));
                localStorage.setItem("tenziesBestTime", time);
            }
        }
         else if(!gameState.started){
            clearTimer();
        }
    }, [gameState.started, gameState.finished]);



    return (
        <div className={styles.score}>
            <div className={styles.score__results}>
                <span>Best result:</span>
                <span> {bestTime} sec</span>
            </div>
            <div className={styles.score__results}>
                <span>Your result:</span>
                <span>{time} sec</span>
            </div>
        </div>
    );
};

export default ScoreArea;