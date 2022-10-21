import React from 'react';
import classes from "../../pages/speedTyping/SpeedTyping.module.css";

const Description = (props) => {
    switch (props.status){
        case "intro":
            return  (<div className={classes.description}>
                        <p>Check up your skills of speed typing!</p>
                        <p>Click "New task" to receive your line to type.</p>
                        <p>When you're ready, click "Run Time" and try to make your task in time.</p>
                         <p>Good luck!</p>
                    </div>);
        case "failed":
            return (<div className={classes.description}>
                        <p>So sorry, time is up!</p>
                        <p>You need more practice to finish in time!</p>
                        <p>Press "New Task" and try again</p>
                        <p>Good luck!</p>
                    </div>)
        case "win":
            return (<div className={classes.description}>
                        <p>Congratulations!</p>
                        <p>Your typing skills are very strong!</p>
                        <p>Wanna improve it?</p>
                        <p>Press "New Task" and try again.</p>
                        <p>Good luck!</p>
                    </div>)
        default:
            return <div className={classes.description}></div>
    }

    return (
        <div>

        </div>
    );
};

export default Description;