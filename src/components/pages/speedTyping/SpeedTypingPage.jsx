import React, {useState} from 'react';
import {useSelector} from "react-redux";
import ScoreArea from "./ScoreArea";
import MyConfetti from "../../MyConfetti";
import UniversalDescription from "../../UniversalDescription";
import descriptionText from "../../../data/speedTyping/description";
import defaultGameState from "../../../data/speedTyping/defaultGameState";
import GameArea from "./GameArea";

const SpeedTypingPage = () => {
    const userName = useSelector(state=>state.user.userName);
    const [gameState, setGameState] = useState(defaultGameState);



    return (
        <div className="gamePage">
            {gameState.record &&
                <MyConfetti/>
            }

            <h1 className="gamePage__title">
                Welcome to Speed Typing, {userName}!
            </h1>
            <div className="gamePage__gameArea">
                <section className="gamePage__gameArea__left">
                    <ScoreArea
                        gameState={gameState}
                        setGameState={setGameState}
                    />
                    <UniversalDescription
                        gameState={gameState}
                        text={descriptionText}
                    />
                </section>
                <section className="gamePage__gameArea__right">
                    <GameArea
                        gameState={gameState}
                        setGameState={setGameState}
                    />
                </section>
            </div>
        </div>
    );
};

export default SpeedTypingPage;