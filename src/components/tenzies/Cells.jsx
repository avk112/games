import React from 'react';
import classes from "../../pages/tenzies/Tenzies.module.css";

const Cells = (props) => {

    const color = {
        true: "#0fe30ca3",
        false: "rgba(245,239,206,0.91)"
    }

    const cell =props.numbersArray.map((num, index) => {
        const choisedColor = color[num.isClicked];
        return (
            <div key={index}
                 id={num.id}
                 onClick={()=>props.click(num)}
                 style={{background:choisedColor}}
                 className={classes.tenziesCell}>
                <img src={require("../../image/tenzies/"+num.num+".png")}/>
            </div>
        )
    })

    return (
        <div className={classes.cellsBlock}>
            {cell}
        </div>
    );
};

export default Cells;