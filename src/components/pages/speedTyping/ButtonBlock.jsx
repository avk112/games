import React from 'react';
import MyButton from "../../UI/buttons/MyButton";
import classes from "./SpeedTyping.module.css";

const ButtonBlock = ({getNewText, startGame, disabled}) => {
    return (
        <div className={classes.buttonBlock}>
            <MyButton
                text="New Task"
                click={getNewText}
            />
            <MyButton
                disabled={disabled}
                text="Start Game"
                click={startGame}
            />
        </div>
    );
};

export default ButtonBlock;