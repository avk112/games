import React from 'react';
import {useState} from "react";
import PropTypes from "prop-types";

const useTimer = (startPosition=0, gap=1, delay=1000) => {
    const [time, setTime] = useState(startPosition);
    const [timerOn, setTimerOn] = useState(false);

    const runTime = ()=> {
        setTime(prev=>prev+gap);
        setTimerOn(false)
    }
    const myTimeout = ()=> {
        if(!timerOn) {
            setTimerOn(true);
            setTimeout(runTime, delay)
        }
    }

    const pauseTimer = ()=>{
        clearTimeout(myTimeout)
    }
    const stopTimer = ()=> {
        setTime(startPosition);
        clearTimeout(myTimeout);
    }

    return {time, startTimer: myTimeout, stopTimer, pauseTimer};
};


export default useTimer;