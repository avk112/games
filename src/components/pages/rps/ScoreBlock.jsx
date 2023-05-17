import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import classes from "./ScoreBlock.module.scss";

const ScoreBlock = ({isUser=false, playerName="Computer"}) => {
    const player = isUser ? 'user': 'opponent';
    const score = useSelector(state=>state.rpsScore[player]);
    const [playerAnimation, setPlayerAnimation] = useState("");
    const reverseOrder = !isUser ? classes.reverseOrder: "";


    useEffect(()=>{
        setPlayerAnimation(classes.rotationAnimation);
        setTimeout(()=>{
            setPlayerAnimation("")
        },1500)
    }, [score]);


    return (
        <div className={classes.scoreBlock}>
            <span  className={classes.scoreBlock__name + ' '+ reverseOrder}>{playerName}</span>
            <span className={classes.scoreBlock__count + ' '+ playerAnimation}>{score}</span>
        </div>
    );
};

export default ScoreBlock;