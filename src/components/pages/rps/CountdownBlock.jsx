import React, {useState, useEffect} from 'react';
import classes from "./CountdownBlock.module.scss";
import useTimer from "../../../hooks/useTimer";


const CountdownBlock = ({newRoundOn, allowUserToChoose}) => {
    const [coverVisible, setCoverVisible] = useState("hidden");
    const {time, startTimer, clearTimer} = useTimer(3, -1, refreshTimer, 700);

    function refreshTimer() {
        setCoverVisible("hidden");
        clearTimer();
        allowUserToChoose();
        return true;
    }

    const goTimer = ()=> {
        setCoverVisible("visible");
        startTimer();
    };

    useEffect(()=>{
        newRoundOn && goTimer();
    }, [newRoundOn])

    return (
        <div className={classes.coverBlock} style={{visibility: coverVisible}}>
            {time}
        </div>
    );
};

export default CountdownBlock;