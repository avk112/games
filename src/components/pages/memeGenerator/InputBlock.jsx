import React from 'react';
import classes from "./MemeGenerator.module.css";
import upFont from "../../../image/memeGenerator/increase-font-size.png";
import downFont from "../../../image/memeGenerator/decrease-font-size.png";

const InputBlock = ({meme, handleInput, changeTextSize}) => {
    return (
        <div className={classes.memeInputBlock}>
            {meme.texts.map((text, index)=>{
                return (
                    <div className={classes.memeInputLine}
                         key={index}>
                        <input
                            className={classes.memeInput}
                            id={text.id}
                            value={text.text}
                            placeholder="Enter text"
                            onChange={handleInput}
                        />
                        <img src={upFont}
                             id={text.id}
                             onClick={(e)=>changeTextSize(e, +1)}
                             className={classes.fontImg}
                        />
                        <img src={downFont}
                             id={text.id}
                             onClick={(e)=>changeTextSize(e,-1)}
                             className={classes.fontImg}
                        />
                    </div>
                )
            })}
        </div>
    )
};

export default InputBlock;