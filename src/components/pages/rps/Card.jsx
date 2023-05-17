import React from 'react';
import classes from "./Card.module.scss";

const Card = ({isUser, animation=false, title="empty"}) => {
    const animationName = isUser ? "userAnimation" : "opponentAnimation";
    const playAnimation = animation ? classes[animationName] : "";
    const background = isUser ? "userCard": "opponentCard";
    const appearenceAnimation = title!=="empty" ? classes.appearenceAnimation : " " ;


    return (
            <div className={classes.card + ' '+classes[background]+ ' ' + playAnimation}>
                <img
                    className={appearenceAnimation}
                    src={require("../../../image/rps/"+title+"-big.png")}

                />
            </div>

    );
};

export default Card;