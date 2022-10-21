import React from 'react';
import classes from "../../pages/memeGenerator/MemeGenerator.module.css";
import InputBlock from "./InputBlock";

const HeaderBlock = ({heightRef, user, meme, handleInput, changeTextSize}) => {
    return (
        <section className={classes.memeHeaderBlock} ref={heightRef} >
            <div className={classes.memeHeader}>
                <h2>Welcome to Meme Generator, {user} </h2>
                <h3>Get some random picture and enter funny text in the field. Enjoy!</h3>
            </div>
                <InputBlock
                meme={meme}
                handleInput={handleInput}
                changeTextSize={changeTextSize}
            />
        </section>
    );
};

export default HeaderBlock;