import React, {useState, useEffect} from 'react';
import classes from "./Quizical.module.css";
import {useSelector} from "react-redux";
import MyButton from "../../components/UI/buttons/MyButton";
import MyLoading from "../../components/MyLoading";
import useConfetti from "../../hooks/useConfetti";
import TopBlock from "../../components/quizical/TopBlock";
import AllQuestions from "../../components/quizical/AllQuestions";
import HeaderBlock from "../../components/quizical/HeaderBlock";
import useGame from "../../hooks/quizical/useGame";

const QuizicalPage = () => {
    const userName = useSelector(state=>state.user.userName);
    const {confettiBlock} = useConfetti();
    const {getQuestions, score, checkScore, winStatus, questionsNumber,
        description, isLoading, questions,checkAnswer
        } = useGame();



    useEffect(()=>{
        getQuestions();
    }, [])

    useEffect(()=> {
        checkScore();
    }, [score.totalAnswers])


    return (
        <div className={classes.gameBlock}>
            {confettiBlock(winStatus)}
            <div className={classes.main}>
                <HeaderBlock
                    userName={userName}
                />
                <TopBlock
                    correctAnswers = {score.correctAnswers}
                    questionsNumber = {questionsNumber}
                    description = {description}
                />
                <div className={classes.gameArea}>
                    {isLoading
                        ?
                        <div className={classes.loadingBlock}>
                            <MyLoading/>
                        </div>
                        :
                        <AllQuestions
                            questions={questions}
                            checkAnswer={checkAnswer}
                        />
                    }
                </div>
                <MyButton
                    text = "New Questions"
                    click = {getQuestions}
                />
            </div>

        </div>
    );
};

export default QuizicalPage;