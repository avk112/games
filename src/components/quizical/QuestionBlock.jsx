import React from 'react';
import classes from "../../pages/quizical/Quizical.module.css";

const QuestionBlock = ({index, question, correct_answer, answers, checkAnswer}) => {

    return(
        <div className={classes.questionBlock}>
            <div className={classes.question}>
                {question}
            </div>
            <div className={classes.answersBlock}>
                {answers.map((answ, i) => {
                    const txt = answ.answer===correct_answer ? "green" : "white"
                    return (
                        <button
                            key={i}
                            value={answ.answer}
                            onClick={(e) => checkAnswer(e, question)}
                            disabled={answ.disabled}
                            style={{backgroundColor: answ.color}}
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