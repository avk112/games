import React from 'react';
import classes from "../../pages/memeGenerator/MemeGenerator.module.css";
import TextBlock from "./TextBlock";
import MyLoading from "../MyLoading";

const MainMemeBlock = ({myRef, meme, startDrag, endDrag, isLoading}) => {

    return (
        <div className={classes.meme}
             ref={myRef}
             onDragOver={(e)=>e.preventDefault()}
        >
            <TextBlock
                meme={meme}
                startDrag={startDrag}
                endDrag={endDrag}
            />
            {isLoading ?
                <MyLoading/>:
                <img src={meme.url} className={classes.memeImg}/>
            }
        </div>
    );
};

export default MainMemeBlock;