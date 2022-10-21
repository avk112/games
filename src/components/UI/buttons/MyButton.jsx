import React from 'react';
import classes from "./MyButton.module.css";

const MyButton = (props) => {
    return (
        <button onClick={props.click}
                className={classes.myBtn}
                disabled={props.disabled}
                style={{backgroundColor: props.backgroundColor}}
        >
            {props.text}
        </button>
    );
};

export default MyButton;