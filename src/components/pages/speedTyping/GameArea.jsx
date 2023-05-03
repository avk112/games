import React, {useEffect, useState} from 'react';
import textsArray from "../../../data/speedTyping/textsList";
import MyButton from "../../UI/buttons/MyButton";
import defaultGameState from "../../../data/speedTyping/defaultGameState";
import InputBlock from "./InputBlock";
import TaskBlock from "./TaskBlock";


const GameArea = ({gameState, setGameState}) => {
    const [textToType, setTextToType] = useState("");

    const getNewText = ()=> {
       gameState.started && setGameState(defaultGameState);

        const length = textsArray.length;
        const i = Math.floor(Math.random()*(length+1-1));
        const randomText = textsArray[i];

        return randomText===textToType ? getNewText() : setTextToType(randomText);
    };


    useEffect(()=>{
        getNewText();
    }, []);



    return (
        <>
            <TaskBlock
                textToType={textToType}
            />
            <InputBlock
                gameState={gameState}
                setGameState={setGameState}
                textToType={textToType}
            />
            <MyButton
                text="New Task"
                click={getNewText}
            />
        </>
    );
};

export default GameArea;