import React, {useEffect, useState} from 'react';
import classes from "./InputBlock.module.scss";
import {setTypedWords, setTypingScore} from "../../../redux/speedTyping/scoreSlice";
import {useDispatch} from "react-redux";


const InputBlock = ({gameState, setGameState, textToType}) => {
    const dispatch = useDispatch();

    const [typedText, setTypedText] = useState("");
    const [wordsToType, setWordsToType] = useState([]);

    const startGame = ()=> {
        !gameState.started &&
        setGameState(prev=>({...prev, started: true}))
    };

    const refreshGame = ()=> {
        setTypedText("");
        const timeForType = Math.floor((textToType.length)/2);
        const wordsToTypeArray = textToType.replace(/(\W+|'.')/g, " ").trim().split(/\s+/g);
        const countOfWordsToType = wordsToTypeArray[0]==='' ? 0 : wordsToTypeArray.length;

        dispatch(setTypingScore({maxTime: timeForType, wordsToType: countOfWordsToType}));
        setWordsToType(wordsToTypeArray);
    };

    const compareStrings = (string)=> {
        const typedWords = string.replace(/(\W+|'.')/g, " ").trim().split(/\s+/g);
        let count = 0;
        for(let i=0; i<typedWords.length; i++){
            if(typedWords[i]===wordsToType[i]){
                count++
            }
        }
        return count;
    };

    const handleTyping = (e)=> {
        const text=e.target.value;
        const correctWords = compareStrings(text);

        dispatch(setTypedWords({typedWords: correctWords}));
        setTypedText(text);
        correctWords===wordsToType.length && setGameState(prev=>({...prev, finished: true}));
    };


    useEffect(()=>{
        refreshGame();
    }, [textToType])


    return (
            <textarea
                className={classes.inputBlock}
                placeholder="Type here"
                value={typedText}
                onChange={handleTyping}
                onClick={startGame}
                disabled={gameState.finished || wordsToType.length===0}
            />
    );
};

export default InputBlock;