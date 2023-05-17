import React, {useEffect, useState} from 'react';
import styles from "./CellsArea.module.scss";

const CellBlock = ({gameState, setGameState, setClickedCells, rolling}) => {
    const [cell, setCell] = useState({
        num:1,
        isClicked:false
    });

    const color = {
        true: "#0fe30ca3",
        false: "rgba(245,239,206,0.91)"
    };

    const choisedColor = color[cell.isClicked];

    const changeCell = ()=> {
            const newNum = Math.floor(Math.random() * (gameState.imgCount)) + 1;
            setCell(prev => ({...prev, num: newNum}));
    }

    const clickOnCell = ()=> {
        if (!gameState.started) {
            setGameState(prevGame => {
                return {...prevGame,
                    started: true,
                    mainNumber: cell.num
                }});
        }
        if(!gameState.finished && (gameState.mainNumber===cell.num || gameState.mainNumber===0 )){
            setCell(prev=>({...prev, isClicked: !prev.isClicked}));
            setClickedCells(prev=> cell.isClicked ? prev-1 : prev+1);

        }
    };

    useEffect(()=> {
        !cell.isClicked && changeCell();
    }, [rolling])

    return (
        <div
             onClick={()=>clickOnCell()}
             style={{background:choisedColor}}
             className={styles.cells__item}>
            <img src={require("../../../image/tenzies/"+cell.num+".png")}/>
        </div>
    );
};

export default React.memo(CellBlock);