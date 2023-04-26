import React from 'react';
import classes from "./SpeedTyping.module.css";
import ButtonBlock from "./ButtonBlock";

const GameArea = ({myRef, typedText, handleTyping, gameStatus, getNewText, startGame}) => {
    return (
        <section className={classes.gameArea}>
                    <textarea
                        ref={myRef}
                        className={classes.input}
                        type="text"
                        value={typedText}
                        onChange={handleTyping}
                        disabled={gameStatus.disableInput}
                    />
            <ButtonBlock
                getNewText={getNewText}
                startGame={startGame}
                disabled={gameStatus.disableButton}
            />
        </section>
    );
};

export default GameArea;