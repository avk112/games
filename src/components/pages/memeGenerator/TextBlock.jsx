import React from 'react';
import classes from "./MemeGenerator.module.css";

const TextBlock = ({meme, startDrag, endDrag}) => {

   return meme.texts.map((txt,i) => {
        return (
            <span
                key={i}
                draggable={true}
                onDragStart={startDrag}
                onDragEnd={endDrag}
                id={txt.id}
                style={{top: txt.y+"px", left: txt.x+"px", fontSize: txt.fontSize}}
                className={classes.memeText}
            >{txt.text}</span>
        )
    })
}

export default TextBlock;