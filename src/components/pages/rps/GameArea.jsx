import React from 'react';
import classes from "./RPS.module.css";
import CardsBlock from "./CardsBlock";
import ItemsBlock from "./ItemsBlock";

const GameArea = ({coverVisible, time, opponent, player, dices,getItem,itemBeforeTop}) => {

    return (
        <div className={classes.gameArea}>
            <div className={classes.coverBlock} style={{visibility: coverVisible}}>
                {time}
            </div>
            <CardsBlock
                opponent={opponent}
                player={player}
            />
            <ItemsBlock
                dices={dices}
                getItem={getItem}
                itemBeforeTop={itemBeforeTop}
            />
        </div>
    );
};

export default GameArea;