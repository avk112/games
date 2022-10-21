import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import logo from "../image/gamepad.png";
import emptyCart from "../image/shopping-cart header.png";
import fullCart from "../image/full-shopping-cart -header.png";
import useGamesData from "../hooks/useGamesData";
import {useDispatch, useSelector} from "react-redux";
import {delUser} from "./redux/user";
import useAuth from "../hooks/useAuth";
import {cleanCart} from "./redux/cart";



const Header = ()=> {
    const selector = useSelector(state=>state);
    const boughtGames = selector.cart.length
    const isAuth = useAuth();
    const dispatch = useDispatch();



    const {getAllGames} = useGamesData();

    const gamesBlock = getAllGames.map((game, index)=>{
        return (
            <li key={index}><NavLink to={game.link}
                                     className={({isActive})=> isActive ? "activeStyle" : "passiveStyle"}>
                                {game.name}
                            </NavLink></li>
        )
    })


    const logBlock=()=>{
     if (!isAuth) {
         return <div className="nav--login"><Link to="/login">Log in</Link></div>
     }
     return <div onClick={()=>{dispatch(delUser()); dispatch(cleanCart())}} className="nav--login">Log out</div>
    }

    const cartImg = ()=> {
       if (boughtGames!==0) {
           return <img src={fullCart}/>
       }
       return <img src={emptyCart}/>
    }

    return (
        <header className="header">
            <nav className="header-nav">
                <div className="logo--block">
                    <img src={logo} className="logo--img"/>
                    <NavLink to="/"
                             className={({isActive})=> isActive ? "activeStyle" : "passiveStyle"}
                    >
                        <h3>GameTech</h3>
                    </NavLink>
                </div>

                <ul className="games--list">
                    {gamesBlock}
                </ul>

                {logBlock()}

                <div className="header-cart"><NavLink to="/cart"
                                                      className={({isActive})=> isActive ? "activeStyle" : "passiveStyle"}
                                            >
                                                {cartImg()} {boughtGames}
                                            </NavLink></div>
            </nav>
        </header>
    )
}

export default Header