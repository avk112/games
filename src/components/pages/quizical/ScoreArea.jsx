import React, {useEffect} from 'react';
import classes from "./ScoreArea.module.scss";
import {useSelector} from "react-redux";

const ScoreArea = ({setGameState}) => {
    const {correctAnswers,totalQuestions, totalAnswers}=useSelector(state=>state.quizicalScore);

    useEffect(()=>{
      if(totalAnswers===totalQuestions){
          const winOrFail = totalAnswers===correctAnswers ? "win": "fail";
          setGameState(prev=>({...prev, [winOrFail]: true}));
      }
    },[totalAnswers]);


    return (
        <div className={classes.score}>
            <div className={classes.score__results}>
                <span className={classes.score__results__title}>Progress:</span>
                <span className={classes.score__results__count}> {(totalAnswers/totalQuestions)*100}%</span>
            </div>
            <div className={classes.score__results}>
                <span className={classes.score__results__title}>Your result:</span>
                <span className={classes.score__results__count}> {correctAnswers}/ {totalQuestions}</span>
            </div>
        </div>
    );
};

export default ScoreArea;