import React from 'react';
import classes from "../../pages/rps/RPS.module.css";

const TopBlock = ({status}) => {
    const topText = {
        intro: <>
                <p>This is familiar Rock-Paper-Scissors game!</p>
                <p>Click "Go!". After that you have 3 seconds to decide, what item to choose.</p>
                <p>Then buttons become available for pushing for 2 sec.</p>
                <p>You must be quickly to press one of them! </p>
                <p>The game has 3 rounds. Try to win!</p>
                <p>Good luck!</p>
            </>,
        win: <>
                <p>Congratulations!!</p>
                <p>You win!</p>
                <p>How about to try again?</p>
                <p>Click "Go!" and improve your skills/</p>
                <p>Good luck!</p>
            </>,
        lose: <>
                <p>Aww...You lose..</p>
                <p>But don't give up!</p>
                <p>How about to try again?</p>
                <p>Click "Go!" and improve your skills/</p>
                <p>Good luck!</p>
            </>,
        draw: <>
                <p>Well, it's draw!</p>
                <p>Amazing, but true.</p>
                <p>How about to try again?</p>
                <p>Click "Go!" and improve your skills/</p>
                <p>Good luck!</p>
            </>
    }


    return (
        <section className={classes.topBlock}>
             {topText[status]}
        </section>
    );
};

export default TopBlock;