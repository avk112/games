import React from 'react';
import styles from "./MyButton.module.scss";

const MyButton = ({text="", click=()=>{}, disabled=false, className={}}) => {
    return (
        <button onClick={click}
                className={`${styles.myBtn} ${className}`}
                disabled={disabled}
        >
            {text}
        </button>
    );
};

export default MyButton;