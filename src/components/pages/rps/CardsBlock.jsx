import React from 'react';
import classes from "./RPS.module.css";

const CardsBlock = ({opponent, player}) => {
    return (
        <div className={classes.cardsBlock}>
            <div className={classes.cardFrame}>
                <div className={classes.playerName}>
                    <span>{opponent.name}</span>
                    <span className={classes.score + ' '+ classes[opponent.score.animation]}>{opponent.score.number}</span>
                </div>
                <div className={classes.card + ' ' + classes[opponent.animation]} >
                    <img src={opponent.card.img}/>
                </div>
            </div>
            <div className={classes.cardFrame}>
                <div className={classes.playerName}>
                    <span>{player.name}</span>
                    <span className={classes.score + ' '+ classes[player.score.animation]}>{player.score.number}</span>
                </div>
                <div className={classes.card+' '+ classes[player.animation]} >
                    <img src={player.card.img}/>
                </div>
            </div>
        </div>
    );
};

export default CardsBlock;