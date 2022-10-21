import React from 'react';
import classes from "../../pages/quizical/Quizical.module.css";
import Description from "./Description";

const TopBlock = ({correctAnswers, questionsNumber, description}) => {
    return (
        <section className={classes.topBlock}>
            <div className={classes.scoreBoard}>
                <h5>Your score:</h5>
                <p>{correctAnswers}/{questionsNumber}</p>
            </div>
            <Description
                status={description}
            />

        </section>
    );
};

export default TopBlock;