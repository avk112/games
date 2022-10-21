import React from 'react';
import classes from "../../pages/quizical/Quizical.module.css";

const HeaderBlock = ({userName}) => {
    return (
        <div className={classes.headerBlock}>
            <h1>Welcome to Qiizical, {userName}!</h1>
        </div>
    );
};

export default HeaderBlock;