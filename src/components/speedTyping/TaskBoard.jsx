import React from 'react';
import classes from "../../pages/speedTyping/SpeedTyping.module.css";

const TaskBoard = ({textToType}) => {
    return (
        <div className={classes.textToType}>
            <span>Your string to type: </span>
            <span className={classes.spanToType}>{textToType}</span>
        </div>
    );
};

export default TaskBoard;