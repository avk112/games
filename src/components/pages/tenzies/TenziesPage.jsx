import React, {useState} from 'react';
import {useSelector} from "react-redux";
import CellsArea from "./CellsArea";
import ScoreArea from "./ScoreArea";
import MyFireworks from "../../MyFireworks";
import MyConfetti from "../../MyConfetti";
import UniversalDescription from "../../UniversalDescription";
import descriptionText from "../../../data/tenzies/description";
import defaultGameState from "../../../data/tenzies/defaultGameState";


const TenziesPage = () => {
    const userName = useSelector(state=>state.user.userName);
    const [gameState, setGameState] = useState(defaultGameState);


    return (
        <div className="gamePage">
            {(gameState.finished && !gameState.record) &&
                <MyFireworks/>
            }
            {gameState.record &&
                <MyConfetti/>
            }

            <h1 className="gamePage__title">
                Welcome to Tenzies, {userName}!
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
                    <CellsArea
                        gameState={gameState}
                        setGameState={setGameState}
                        defaultGameState={defaultGameState}
                    />
                </section>
            </div>
        </div>
    );
};

export default TenziesPage;