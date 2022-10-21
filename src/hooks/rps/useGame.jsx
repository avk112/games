import React from 'react';
import rock from "../../image/rps/rock.png";
import scissors from "../../image/rps/scissors.png";
import paper from "../../image/rps/paper.png";
import empty from "../../image/rps/empty.png";
import {useState} from "react";
import useTimer from "../useTimer";

const useGame = (userName) => {

    const items = [
        {
            number: 1,
            title: "rock",
            img: rock,
            disabled: true,
            clicked: false
        },
        {
            number: 2,
            title: "scissors",
            img: scissors,
            disabled: true,
            clicked: false
        },
        {
            number: 3,
            title: "paper",
            img: paper,
            disabled: true,
            clicked: false
        }
    ];

    const topTextStatus={
        win: "win",
        lose: "lose",
        draw: "draw",
        intro: "intro"
    }

   const playerObj= {
        name: "userName",
            score: {
        number: 0,
            animation: "rotationAnimation"
    },
        card: {
            number: 0,
                title: "empty",
                img: empty,
                disabled: false
        },
        animation: ""
    }

    const [dices, setDices] = useState(items);
    const [coverVisible, setCoverVisible] = useState("hidden");
    const [player, setPlayer] = useState({...playerObj, name: userName});
    const [opponent, setOpponent]= useState({...playerObj, name: "Computer"});
    const {time, startTimer, stopTimer, pauseTimer} = useTimer(3, -1, 700);
    const [gameRun, setGameRun] = useState(false);
    const [roundsCount, setRoundsCount] =useState(0);
    const [gapForPlay, setGapForPlay] = useState(false);
    const [itemBeforeTop, setItemBeforeTop] = useState(0);
    const [topBlock, setTopBlock] = useState(topTextStatus.intro);
    const [congratulations, setCongratulations] = useState(false);

    const getItem = (title, disabled)=> {
        if(!disabled) {
            setDices(prev => {
                return prev.map(dice => {

                    return dice.title === title ? {...dice, disabled: true, clicked: true} : {...dice, disabled: true}
                })
            })
            const playerDice = items.find(item => item.title === title);
            setPlayer(prev => {
                return {...prev, card: playerDice}
            });
            const numb = Math.floor(Math.random() * (4 - 1) + 1);
            const itemToSet = items.find(item => item.number === numb);
            return setOpponent(prev => ({...prev, card: itemToSet}));
        }
    }

    const goTimer = ()=> {
        setCongratulations(false);
        setTopBlock(topTextStatus.intro);
        setCoverVisible("visible");
        setGameRun(true);
        startTimer();
        setOpponent(prev=>({...prev,
            score: {number: 0, animation: "rotationAnimation"}}));
        setPlayer(prev=>({...prev,
            score: {number: 0, animation: "rotationAnimation"}}));
        setRoundsCount(0);
        setDices(prev=>(prev.map(dice=>({...dice,
            clicked: false,
            disabled: false}))));

    }

    const checkResult = ()=> {
        setItemBeforeTop("0");
        setDices(prev=>(prev.map(dice=>({...dice, disabled: true}))));
        if(opponent.card.title===player.card.title){
            setOpponent(prev=>({...prev, animation: "opponentAnimation"}));
            setPlayer(prev=>({...prev, animation: "playerAnimation"}));
        }

        else{
            if(opponent.card.title==="rock")
            {
                if(player.card.title==="scissors"){
                    setOpponent(prev=>({...prev,
                        score: {...prev.score,
                            number: prev.score.number+1,
                            animation: "rotationAnimation"},
                        animation: "opponentAnimation"}));
                }
                else{
                    setPlayer(prev=>({...prev,
                        score: {...prev.score,
                            number: prev.score.number+1,
                            animation: "rotationAnimation"},
                        animation: "playerAnimation"}));
                }
            }
            else if(opponent.card.title==="paper"){
                if(player.card.title==="rock"){
                    setOpponent(prev=>({...prev,
                        score: {...prev.score,
                            number: prev.score.number+1,
                            animation: "rotationAnimation"},
                        animation: "opponentAnimation"}));
                }
                else{
                    setPlayer(prev=>({...prev,
                        score: {...prev.score,
                            number: prev.score.number+1,
                            animation: "rotationAnimation"},
                        animation: "playerAnimation"}));
                }
            }
            else if(opponent.card.title==="scissors"){
                if(player.card.title==="paper"){
                    setOpponent(prev=>({...prev,
                        score: {...prev.score,
                            number: prev.score.number+1,
                            animation: "rotationAnimation"},
                        animation: "opponentAnimation"}));
                }
                else{
                    setPlayer(prev=>({...prev,
                        score: {...prev.score,
                            number: prev.score.number+1,
                            animation: "rotationAnimation"},
                        animation: "playerAnimation"}));
                }
            }

        }
    }

    const allowToMakeChoice = ()=> {
        setItemBeforeTop("-80px");
        setDices(prev=>(prev.map(dice=>({...dice,
            clicked: false,
            disabled: false}))));
        setOpponent(prev=>({...prev,
            score: {...prev.score, animation: ""},
            animation: ""}));
        setPlayer(prev=>({...prev,
            score: {...prev.score, animation: ""},
            animation: ""}));
        setCoverVisible("hidden");
        setGapForPlay(true);
    }

    const finishGame = ()=> {
        setGameRun(false);
        setCoverVisible("hidden");
    }

    const checkWinner = ()=> {
        if(player.score.number > opponent.score.number)
        {
            setTopBlock(topTextStatus.win);
            setCongratulations(true);
            setTimeout(()=>{
                setCongratulations(false);
            },8000)
        }
        else if(player.score.number === opponent.score.number)
        {
            setTopBlock(topTextStatus.draw);
        }
        else
        {
            setTopBlock(topTextStatus.lose);
        }
    }

    const repeatRound = ()=> {
        setTimeout(()=>{
            stopTimer();
            setRoundsCount(prev => prev + 1);
            setOpponent(prev=>({...prev,
                card: {...prev.card,
                    title: "empty",
                    img: empty}}));
            setPlayer(prev=>({...prev,
                card: {...prev.card,
                    title: "empty",
                    img: empty}}));
            setCoverVisible("visible");
            setDices(prev=>(prev.map(dice=>({...dice,
                clicked: false,
                disabled: true}))));

        }, 4000)
    }

    return {roundsCount, gameRun, time, startTimer,
        allowToMakeChoice, repeatRound, finishGame, checkWinner,
        checkResult, congratulations,topBlock, coverVisible, dices,
        getItem, itemBeforeTop, opponent, player, goTimer, gapForPlay, setGapForPlay};
};

export default useGame;