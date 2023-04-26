import React, {useState} from 'react';
import styles from "./HomePage.module.scss";
import cartImg from "../../image/shopping-cart.png";
import fullCartImg from "../../image/full-shopping-cart.png";
import gamesData from "../../data/gamelist";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addGame} from "../../redux/cart";


const HomePage = () => {
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
    const[allGames, setAllGames] = useState(gamesData);


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
        <div className={styles.homepage__gamesBlock__item__buy}>
            {inCart
            ? <img src={fullCartImg} alt="full cart" title="Added to cart"/>
            : <img src={cartImg} alt="cart"  title="Add to cart" onClick={()=>buyGame(game)}/>}
        </div>
        )
    }

    const allGamesBlock = allGames.map(game => {
                const {id, name, link, img} = game;
                const gridClass = getGridClass(id);
                return (
                    <div key={id} className={`${styles.homepage__gamesBlock__item} ${styles[gridClass]}`}>
                        {buyBlock(game)}
                        <Link to={link}>
                            <h4 className={styles.homepage__gamesBlock__item__title}>{name}</h4>
                            <div className={styles.homepage__gamesBlock__item__imgBlock}>
                                <img src={img} className={styles.homepage__gamesBlock__item__imgBlock__img}/>
                            </div>
                        </Link>
                    </div>
                )
            });

    return (
            <div className={styles.homepage}>
                <div className={styles.homepage__top}>
                    <h1 className={styles.homepage__top__title}>
                        GameTech welcomes you, {userName}!
                    </h1>
                    <p>An awesome place to spend some time</p>
                </div>
                <div className={styles.homepage__gamesBlock}>
                    {allGamesBlock}
                </div>
            </div>

    );
};

export default HomePage;