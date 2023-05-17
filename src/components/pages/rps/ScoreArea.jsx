import React from 'react';
import classes from "./ScoreArea.module.scss";
import ScoreBlock from "./ScoreBlock";


const ScoreArea = ({userName}) => {

    return (
        <div className={classes.score}>
           <ScoreBlock
               isUser={true}
               playerName={userName}
           />
            <span>:</span>
            <ScoreBlock/>
        </div>
    );
};

export default ScoreArea;