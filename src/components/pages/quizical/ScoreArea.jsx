import React, {useEffect} from 'react';
import styles from "./ScoreArea.module.scss";
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
        <div className={styles.score}>
            <div className={styles.score__results}>
                <span>Progress:</span>
                <span> {(totalAnswers/totalQuestions)*100}%</span>
            </div>
            <div className={styles.score__results}>
                <span>Your result:</span>
                <span> {correctAnswers}/ {totalQuestions}</span>
            </div>
        </div>
    );
};

export default ScoreArea;