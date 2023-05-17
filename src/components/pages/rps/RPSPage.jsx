import React, {useState} from 'react';
import {useSelector} from "react-redux";
import classes from "./RPSPage.module.scss";
import MyConfetti from "../../MyConfetti";
import UniversalDescription from "../../UniversalDescription";
import defaultGameState from "../../../data/rps/defaultGameState";
import descriptionText from "../../../data/rps/description";
import ScoreArea from "./ScoreArea";
import ActionArea from "./ActionArea";
import MyButton from "../../UI/buttons/MyButton";


const RPSPage = () => {
    const userName = useSelector(state=>state.user.userName);
    const [gameState, setGameState] = useState(defaultGameState);

    const startGame = ()=> {
        setGameState({...defaultGameState, started: true});
    };


    return (
        <div className="gamePage">
            {gameState.record &&
                <MyConfetti/>
            }
            <h1 className="gamePage__title">
                Welcome to Rock-Paper-Scissors, {userName}!
            </h1>
            <div className={`gamePage__gameArea ${classes.gameArea}`}>
                <section className={`gamePage__gameArea__left ${classes.gameArea__left}`}>
                    <UniversalDescription
                        gameState={gameState}
                        text={descriptionText}
                    />
                </section>
                <section className={`gamePage__gameArea__right ${classes.gameArea__right}`}>
                    <ScoreArea
                        userName={userName}
                    />
                    <ActionArea
                        gameState={gameState}
                        setGameState={setGameState}
                    />
                    <MyButton
                        text="Go!"
                        disabled={gameState.started && !gameState.finished}
                        click={startGame}
                    />
                </section>
            </div>
        </div>
    );
};

export default RPSPage;