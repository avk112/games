import React from "react";
import gamelist from "../data/gamelist";

const useGamesData = (name)=> {
    const getAllGames = gamelist;
    const choisedGame = gamelist.find(game=>game.name===name);

    return {getAllGames, choisedGame};
}
export default useGamesData;
