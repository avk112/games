import React from 'react';
import classes from "../../pages/tenzies/Tenzies.module.css";

const DescriptionBlock = (props) => {

    const descriptionText = (position)=>{
        switch (position){
            case "intro":
                return (<div><p>Try to fill the cells with the same pictures.</p><p>Click on the picture to start the game.</p><p>Click Roll to change pictures</p><p>Good Luck!</p></div>);
            case "win":
                return ("Congratulations! You win! Click Roll to start New Game and try to make a new time-record!");
             case "record":
                 return ("What a fantastic score! A new time record achieved! Don't stop!");
            default:
                return 0;
        }

    }

    return (
        <section className={classes.description}>
            {descriptionText(props.description)}
        </section>
    );
};

export default DescriptionBlock;