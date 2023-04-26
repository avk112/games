import React, {useState} from 'react';
import classes from "./QuestionBlock.module.scss";
import {useDispatch} from "react-redux";
import {incrementCorrectAnswers, incrementTotalAnswers} from "../../../redux/quizical/scoreSlice";

const QuestionBlock = ({ ...question}) => {
    const dispatch = useDispatch();
    const [currentQuestion, setCurrentQuestion] = useState(question);

    const checkAnswer=(event)=> {
        const answer = event.target.value;
        const correctAnswer=currentQuestion.correct_answer;
        const newAnswers=currentQuestion.answers.map(item=>{
            item.disabled=true;
            if(item.answer===correctAnswer){
                item.color="correct";
                item.answer===answer && dispatch(incrementCorrectAnswers());
            }
            if(item.answer!==correctAnswer){
                item.color = item.answer===answer ? "incorrect" : "standart";
            }
        return item;
        });

        dispatch(incrementTotalAnswers());
        setCurrentQuestion(prev=>({...prev, answers: newAnswers}));
    };


    return(
        <div className={classes.questionBlock}>
            <div className={classes.questionBlock__question}>
                {currentQuestion.question}
            </div>
            <div className={classes.questionBlock__answersBlock}>
                {currentQuestion.answers.map((answ, i) => {
                    return (
                        <button
                            key={i}
                            className={classes[answ.color]}
                            value={answ.answer}
                            onClick={checkAnswer}
                            disabled={answ.disabled}
                        >
                            {answ.answer}
                        </button>
                    )
                })}
            </div>
        </div>
    )
};

export default QuestionBlock;