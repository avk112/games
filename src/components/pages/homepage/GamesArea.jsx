import React from 'react';
import gamesData from "../../../data/gamelist";
import GameBlock from "./GameBlock";

const GamesArea = () => {

    const allGamesBlock = gamesData.map(game => {
        return (
            <GameBlock
                key={game.id}
                {...game}
            />
        )
    });


    return (
        <>
            {allGamesBlock}
        </>
    );
};

export default GamesArea;