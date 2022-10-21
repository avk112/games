import React from 'react';
import QuestionBlock from "./QuestionBlock";

const AllQuestions = ( {questions, checkAnswer}) => {
    return (
        questions.map((quest, index) => {
            return (
                <QuestionBlock
                    key={index}
                    question={quest.question}
                    correct_answer={quest.correct_answer}
                    answers={quest.answers}
                    checkAnswer={checkAnswer}
                />
            )
        })
    );
};

export default AllQuestions;