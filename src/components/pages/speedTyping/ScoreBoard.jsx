import React from 'react';
import classes from "./SpeedTyping.module.css";

const ScoreBoard = ({maxTime, time, wordsNumber}) => {
    return (
        <div className={classes.timeBlock}>
            <div className={classes.timeBlockLine}>
                <span>Max time:</span>
                <span>{maxTime} sec</span>
            </div>
            <div className={classes.timeBlockLine}>
                <span>Your time:</span>
                <span>{time} sec</span>
            </div>
            <div className={classes.timeBlockLine}>
                <span>Words to type:</span>
                <span>{wordsNumber.toTypeWords}</span>
            </div>
            <div className={classes.timeBlockLine}>
                <span>Typed words:</span>
                <span>{wordsNumber.typedWords}</span>
            </div>
        </div>
    );
};

export default ScoreBoard;