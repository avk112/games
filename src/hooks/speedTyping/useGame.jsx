import React from "react";
import textsArray from "../../data/speedTyping/textsList";
import {useState} from "react";
import {useRef} from "react";
import useTimer from "../useTimer";

const useGame = ()=> {

    const game = {
        started: false,
        win:false,
        disableButton: false,
        disableInput: true,
        status:"intro"
    }

    const [gameStatus, setGameStatus] = useState({...game, disableButton: true});
    const [maxTime, setMaxTime] = useState(0);
    const [textToType, setTextToType] = useState("");
    const [wordsNumber, setWordsNumber] = useState({toTypeWords: 0, typedWords: 0});
    const [typedText, setTypedText] = useState("");
    const myRef=useRef(null);
    const {time, startTimer, stopTimer, pauseTimer}=useTimer();

    const countWords = (string)=> {
        const wordsArray = string.replace(/(\W+|'.')/g, " ").trim().split(/\s+/g);
        if(wordsArray[0]===''){
            return 0;
        }
        else {
            return wordsArray.length;
        }
    }

    const getNewText = ()=> {
        const length = textsArray.length;
        const i = Math.floor(Math.random()*(length+1-1));
        const randomText = textsArray[i];
        const timeForType = Math.floor((randomText.length)/2);
        setMaxTime(timeForType);
        setGameStatus(game);
        const count = countWords(randomText);
        setWordsNumber(prev=>{return {...prev, toTypeWords: count}})

        return setTextToType(randomText);
    }

    const startGame = ()=> {
        setGameStatus(prev=> {return {...prev,
            started: true,
            disableButton: true,
            disableInput: false
        }});
        myRef.current.disabled=false;
        myRef.current.focus();
    }

    const handleTyping = (e)=> {
        const text=e.target.value;
        setTypedText(text);
    }

    const watchTypedText = ()=> {
        if(typedText===textToType && gameStatus.started && !gameStatus.win){
            setGameStatus(prev=> {return {...prev, win: true}});
        }
        const count = countWords(typedText);
        setWordsNumber(prev=>{return {...prev, typedWords: count}})
    }

    const gameIsRunning = ()=> {
        startTimer();
    }

    const gameFinished = ()=> {
        pauseTimer();
        if(time<maxTime){
            setGameStatus(prev=>{return{...prev, status: "win", disableInput: true}});
        }
        else if(time!==0){
            setGameStatus(prev=>{return{...prev, status: "failed", disableInput: true}});
        }
    }

    const gameNotRunning = ()=> {
        stopTimer();
        setTypedText("");
    }

    return { gameStatus, time, maxTime, wordsNumber,
            textToType, typedText, watchTypedText,
            myRef, handleTyping, getNewText, startGame,
            gameIsRunning, gameNotRunning, gameFinished}
}

export default useGame;