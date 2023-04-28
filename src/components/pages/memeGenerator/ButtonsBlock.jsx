import React from 'react';
import classes from "./ButtonsBlock.module.scss";
import MyButton from "../../UI/buttons/MyButton";
import downloadImg from "../../../image/memeGenerator/downloads-hover.png";

const ButtonsBlock = ({getMeme, downloadMeme}) => {

    return (
        <div className={classes.buttonsBlock}>
            <MyButton
                text="New Meme"
                click={getMeme}
                className={classes.buttonsBlock__memeButton}
            />
            <img src={downloadImg} className={classes.buttonsBlock__downloadIcon}
                 title="Download meme"
                 alt="Download meme"
                 onClick={downloadMeme}
            />
        </div>
    );
};

export default ButtonsBlock;