import React from 'react';
import classes from "../../pages/tenzies/Tenzies.module.css";

const ScoreBoard = (props) => {
    return (
        <div className={classes.scoreBoard}>
            <div className={classes.results}>
                <p>Best result:</p>
                <p> {props.bestTime} sec</p>
            </div>
            <div className={classes.results}>
                <p>Your result:</p>
                <p>{props.time} sec</p>
            </div>
        </div>
    );
};

export default ScoreBoard;