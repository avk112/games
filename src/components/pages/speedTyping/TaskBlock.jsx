import React from 'react';
import classes from "./TaskBlock.module.scss";

const TaskBlock = ({textToType}) => {

    return (
        <div className={classes.taskBlock}>
            <p>{textToType}</p>
        </div>
    );
};

export default TaskBlock;