import React from 'react';
import classes from "../../pages/quizical/Quizical.module.css";

const Description = ({status}) => {

    const descriptionText = {
        intro: <div className={classes.descriptionBlock}>
                        <p>The rules are very simple.</p>
                        <p>Choose read the question and choose the answer!</p>
                        <p>Check your knowledge in different themes.</p>
                         <p>Good luck!</p>
                    </div>,
        win: <div className={classes.descriptionBlock}>
                        <p>Wow! Nice job!</p>
                        <p>You've answered all questions correct!</p>
                        <p>How about to try oce more?</p>
                        <p>Good luck!</p>
                    </div>,
        fail:<div className={classes.descriptionBlock}>
                    <p>Aww... It was close...</p>
                    <p>But not a reason to give up!</p>
                    <p>Try to play again.</p>
                    <p>Good luck!</p>
                </div>
    }


    return (
            descriptionText[status]
    );
};

export default Description;