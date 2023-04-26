import React, {useState} from 'react';
import {useSelector} from "react-redux";
import UniversalDescription from "../../UniversalDescription";
import defaultGameState from "../../../data/quizical/defaultGameState";
import descriptionText from "../../../data/quizical/description";
import MyFireworks from "../../MyFireworks";
import MyConfetti from "../../MyConfetti";
import ScoreArea from "./ScoreArea";
import QuestionsArea from "./QuestionsArea";

const QuizicalPage = () => {
    const userName = useSelector(state=>state.user.userName);
    const [gameState, setGameState] = useState(defaultGameState);


    return (
        <div className="gamePage">
            {!gameState.win &&
                <>
                    <MyFireworks/>
                    <MyConfetti/>
                </>
            }

            <h1 className="gamePage__title">
                Welcome to Quizical, {userName}!
            </h1>
            <div className="gamePage__gameArea">
                <section className="gamePage__gameArea__left">
                    <ScoreArea
                        setGameState={setGameState}
                    />
                    <UniversalDescription
                        gameState={gameState}
                        text={descriptionText}
                        finishBreakPoint="fail"
                        successBreakPoint="win"
                    />
                </section>
                <section className="gamePage__gameArea__right">
                   <QuestionsArea
                        gameState={gameState}
                        setGameState={setGameState}
                   />
                </section>
            </div>
        </div>
    );
};

export default QuizicalPage;