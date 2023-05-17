import React, {useState, useEffect} from 'react';
import classes from "./ActionArea.module.scss";
import CountdownBlock from "./CountdownBlock";
import Card from "./Card";
import ItemsBlock from "./ItemsBlock";
import {shortItems as items} from "../../../data/rps/itemsToChoose";
import {useDispatch, useSelector} from "react-redux";
import {increment, refresh} from "../../../redux/rps/scoreSlice";



const ActionArea = ({gameState, setGameState}) => {
    const dispatch = useDispatch();
    const userScore = useSelector(state=>state.rpsScore.user);
    const opponentScore = useSelector(state=>state.rpsScore.opponent);


    class PlayCard {
        constructor(title="empty", animation=false) {
            this.animation = animation;
            this.title = title;
        }
    }

    const [userCard, setUserCard] = useState(new PlayCard());
    const [opponentCard, setOpponentCard] = useState(new PlayCard());
    const [enableToChoose, setEnableToChoose] = useState(false);
    const [checkRound, setCheckRound] =useState(false);
    const [newRoundOn, setNewRoundOn] = useState(false);


    const runNewRound = ()=> {
        setNewRoundOn(true);
        setCheckRound(false);
    }

    const refreshCards = ()=> {
        setOpponentCard( new PlayCard());
        setUserCard(new PlayCard());
    };

    const allowUserToChoose = ()=> {
        setEnableToChoose(true);
        setTimeout(()=>{
            setEnableToChoose(false);
            setCheckRound(true);
        }, 2000)
    };

    const makeOpponentChoice = (userCardId)=> {
        const numb = Math.floor(Math.random() * (4 - 1) + 1);
        const opponentCardTitle = items[numb].title;
        const userCardTitle = items[userCardId].title;
        setUserCard(prev=>({...prev, title: userCardTitle }));
        setOpponentCard(prev => ({...prev, title: opponentCardTitle}));
    };

    const setRoundWinner = (isUser=true)=> {
        const playerName = isUser ? "user" : "opponent";
        const setFunction = isUser ? setUserCard : setOpponentCard;
        setFunction(prev => ({...prev,  animation: true}));
        dispatch(increment({player: playerName}));
    };

    const checkRoundWinner = ()=> {
        if(opponentCard.title===userCard.title){
            setOpponentCard(prev=>({...prev, animation: true}));
            setUserCard(prev=>({...prev, animation: true}));
        }
        else {
            if (opponentCard.title === "rock") {
                if (userCard.title === "scissors") {
                    setRoundWinner(false);
                }
                if (userCard.title === "paper"){
                    setRoundWinner();
                }
            }
            if (opponentCard.title === "paper") {
                if (userCard.title === "rock") {
                    setRoundWinner(false);
                }
                if (userCard.title === "scissors"){
                    setRoundWinner();
                }
            }
            if (opponentCard.title === "scissors") {
                if (userCard.title === "paper") {
                    setRoundWinner(false);
                }
                if(userCard.title === "rock"){
                    setRoundWinner();
                }
            }
        }
    };

    const compareCards =()=> {
        setTimeout(()=>{
            checkRoundWinner();
        }, 1000);

        setTimeout(()=>{
            setNewRoundOn(false);
        }, 3000);
    };


    const checkGameWinner = ()=> {
        if(userScore > opponentScore && userScore >=2){
           return setGameState(prev=>({...prev, finished:true, record: true}));
        }
        if(userScore < opponentScore && opponentScore >=2)
        {
            return setGameState(prev=>({...prev, finished:true}));
        }
        runNewRound();
    };


    useEffect(()=>{
        if(checkRound){
            if(newRoundOn){
                return compareCards();
            }
            refreshCards();
            checkGameWinner();
        }
    }, [checkRound, newRoundOn]);


    useEffect(()=>{
        if(!gameState.finished){
            dispatch(refresh());
            gameState.started && runNewRound();
        }
    }, [gameState.started, gameState.finished])



    return (
        <div className={classes.actionArea}>
            <CountdownBlock
                newRoundOn={newRoundOn}
                allowUserToChoose={allowUserToChoose}
            />
            <Card
                isUser={true}
                animation={userCard.animation}
                title={userCard.title}
            />
            <ItemsBlock
                makeOpponentChoice={makeOpponentChoice}
                enableToChoose={enableToChoose}
            />
            <Card
                isUser={false}
                animation={opponentCard.animation}
                title={opponentCard.title}
            />
        </div>
    );
};

export default ActionArea;