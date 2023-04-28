// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react';
import {useState} from "react";
// import PropTypes from "prop-types";

const useTimer = (startPosition=0, gap=1, delay=1000) => {
    const [time, setTime] = useState(startPosition);
    const [timerOn, setTimerOn] = useState(false);
    const [timeoutStamp, setTimeoutStamp] = useState("");

    const incrementTime = ()=> {
        setTime(prev=>prev+gap);
    };

    const enableTimer = ()=> {
        const newTimeoutStamp= setTimeout(incrementTime, delay);
        setTimeoutStamp(newTimeoutStamp);
    };

    const startTimer = ()=> {
        setTimerOn(true);
        enableTimer();
    }

    const stopTimer = ()=>{
        setTimerOn(false);
        clearTimeout(timeoutStamp);
    };

    const clearTimer = ()=> {
        stopTimer();
        setTime(startPosition);
    }

    useEffect(()=>{
         timerOn && enableTimer();
    },[time]);


    return {time, startTimer, clearTimer, stopTimer};
};


export default useTimer;