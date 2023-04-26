import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import logo from "../image/gamepad.png";
import emptyCart from "../image/shopping-cart header.png";
import fullCart from "../image/full-shopping-cart -header.png";
import {useDispatch, useSelector} from "react-redux";
import {delUser} from "../redux/user";
import useAuth from "../hooks/useAuth";
import {cleanCart} from "../redux/cart";
import navData from "../data/navigations";
import HiddenScreen from "./HiddenScreen";
import menuImg from "../image/menu-list-grey.png";



const Header = ()=> {
    const cart = useSelector(state=>state.cart);
    // const boughtGames = selector.cart.length
    // const isAuth = useAuth();
    const boughtGames=cart.length;
    const isAuth=useSelector(state=>state.user.registered);
    const dispatch = useDispatch();
    // const isAuth=true;
    const [isVisibleMenu, setIsVisibleMenu] = useState(false);

    const handleVisible = (visible=true)=> {
        setIsVisibleMenu(visible);
    }

    const gamesBlock = navData.map(item=>{
        const {id, name, url} = item;
        return (
            <li key={id}>
                <NavLink to={url} className={({isActive})=> isActive ? "activeStyle" : "passiveStyle"}>
                    {name}
                </NavLink>
            </li>
        )
    });

    const hiddenGamesBlock = navData.map(item=>{
        const {id, name, url} = item;
        return (
            <li key={id} onClick={()=>handleVisible(false)}>
                <NavLink to={url} className={({isActive})=> isActive ? "activeStyle" : "passiveStyle"}>
                    {name}
                </NavLink>
            </li>
        )
    });

    const hiddenMenu = <div className="header__hiddenMenu">
        <ul className="header__hiddenMenu__list">
            {hiddenGamesBlock}
        </ul>
    </div>


    const loginBlock = !isAuth
        ? <div className="header__nav__login"><Link to="/login">Log in</Link></div>
        : <div onClick={()=>{dispatch(delUser()); dispatch(cleanCart())}} className="header__nav__login">Log out</div>;


    const cartImg = boughtGames!==0
        ? <img src={fullCart}/>
        : <img src={emptyCart}/>;

    return (
        <header className="header">
            <HiddenScreen
                content={hiddenMenu}
                handleVisible={handleVisible}
                isVisible={isVisibleMenu}
            />
            <nav className="header__nav">
                <div className="header__nav__logoBlock">
                    <Link to="/">
                        <img src={logo} className="header__nav__logoBlock__logoImg"/>
                        <h3 className="header__nav__logoBlock__title">GameTech</h3>
                    </Link>
                </div>
                <div className="header__nav__menuImg">
                    <img
                        src={menuImg} alt="menu"
                        onClick={handleVisible}
                    />
                </div>
                <ul className="header__nav__gamesList">
                    {gamesBlock}
                </ul>
                <>
                    {loginBlock}
                </>
                <div className="header__nav__cart">
                    <NavLink to="/cart" className={({isActive})=> isActive ? "activeStyle" : "passiveStyle"}>
                        {cartImg} {boughtGames}
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header