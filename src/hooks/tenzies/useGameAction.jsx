import React from 'react';
import useTimer from "../useTimer";
import {useState} from "react";

const useGameAction = (props) => {
    const [fireworksOn, setFireworksOn] = useState(false);
    const [confettiOn, setConfettiOn] = useState(false);
    const [bestTime, setBestTime] = useState(localStorage.getItem("tenziesBestTime"));

    const buttonText = {
        roll: "Roll",
        newGame: "New Game"
    }

    const {time, startTimer, stopTimer, pauseTimer} = useTimer();
    const [description, setDescription] = useState("intro");
    const [button, setButton] = useState(buttonText.roll);

    const gameInProcess = ()=> {
        setDescription("intro");
        setButton(buttonText.roll)
        startTimer();
    }

    const gameFinished = ()=> {
        pauseTimer();
        setButton(buttonText.newGame);

        if(time<bestTime || bestTime===null) {
            localStorage.setItem("tenziesBestTime", time);
            setDescription("record");
            setConfettiOn(true);
            setTimeout(()=>setConfettiOn(false), 10000);
        }
        else {
            setDescription("win");
            setFireworksOn(true);
            setTimeout(()=>setFireworksOn(false), 5000);
        }
    }

    const gameBackedToStart = ()=> {
        stopTimer();
        setButton(buttonText.roll);
        setDescription("intro");
        setBestTime(localStorage.getItem("tenziesBestTime"));
        setFireworksOn(false);
        setConfettiOn(false);
    }
    return {gameInProcess, gameFinished, gameBackedToStart, time, bestTime, fireworksOn, confettiOn, description, button};
};

export default useGameAction;