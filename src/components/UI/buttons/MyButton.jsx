import React from 'react';
import styles from "./MyButton.module.scss";

const MyButton = ({text="", click=()=>{}, disabled=false, backgroundColor="", width="100%"}) => {
    return (
        <button onClick={click}
                className={styles.myBtn}
                disabled={disabled}
                style={{backgroundColor: backgroundColor, width:width}}
        >
            {text}
        </button>
    );
};

export default MyButton;