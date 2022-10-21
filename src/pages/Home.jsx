import React, {useState} from 'react';
import cartImg from "../image/shopping-cart.png";
import fullCartImg from "../image/full-shopping-cart.png";

import {Link} from "react-router-dom";
import useGamesData from "../hooks/useGamesData";
import {useDispatch, useSelector} from "react-redux";
import {addGame} from "../components/redux/cart";


const Home = () => {
    const getGridClass=(id)=> {
        switch (id) {
            case 1:
            case 5:
                return "wide";
            case 2:
            case 4:
                return "common";
            case 3:
                return "tall"
        }
    };
    const dispatch=useDispatch();


    const userName = useSelector(store=>store.user.userName);
    const cart = useSelector(store=>store.cart)
    const {getAllGames} = useGamesData();
    const[allGames, setAllGames] = useState(getAllGames);


    const buyGame = (game)=> {
        game.isBought=true;
        setAllGames(prevGames=>{
            return (
                prevGames.map((g)=>{
                    return g.id===game.id ? game : {...g}
                })
            )
        })
        dispatch(addGame(game))
    }

    const buyBlock = (game)=> {
        const inCart = cart.some((item)=>{return item.id===game.id})
        return (
        <div className="home--game--img">
            {inCart
            ? <img src={fullCartImg}/>
            : <img src={cartImg} onClick={()=>buyGame(game)}/>}
        </div>
        )
    }

    const allGamesBlock = allGames.map((game,index)=>{
        const gridClass=getGridClass(game.id)
        const img=require("../"+game.img)
        return(
            <div key={index} className={`home--game ${gridClass}`}>
                {buyBlock(game)}
                <Link to={game.link}>
                    <h4 className="home--games--h4">{game.name}</h4>
                    <img src={img} className="games--block--img"/></Link>
            </div>
        )
    })
    return (
        <div className="homepage">
            <h1>Welcome to GameTech, {userName} !</h1>
            <h2>An awesome place to play wonderful games and spend some time with pleasure</h2>
            <h3>Choose one of games below to play</h3>
            <div className="home--games--block">
                 {allGamesBlock}
            </div>
        </div>
    );
};

export default Home;