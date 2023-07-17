import React, {useState} from 'react';
import classes from "./GameBlock.module.scss";
import {Link} from "react-router-dom";
import fullCartImg from "../../../image/full-shopping-cart.png";
import cartImg from "../../../image/shopping-cart.png";
import {useDispatch, useSelector} from "react-redux";
import {addGame, isGameBought} from "../../../redux/cart";

const GameBlock = ({...game}) => {
    const {id, name, link, img, imgSmall} = game;
    const dispatch = useDispatch();
    const inCart = useSelector(state=>isGameBought(state, id));
    const [imgLoaded, setImgLoaded] = useState(false)


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

    const gridClass = getGridClass(id);

    const handleImgLoading = ()=> {
        setImgLoaded(true);
    }
    const buyGame = (item)=> {
        dispatch(addGame({game: item}))
    }

    const buyBlock = <div className={classes.game__buy}>
                        {inCart
                            ? <img src={fullCartImg} alt="full cart" title="Added to cart"/>
                            : <img src={cartImg} alt="cart"  title="Add to cart" onClick={()=>buyGame(game)}/>}
                    </div>


    return (
        <div key={id} className={`${classes.game} ${classes[gridClass]}`}>
            {buyBlock}
            <Link to={link}>
                <h4 className={classes.game__title}>{name}</h4>
                <div className={classes.game__imgBlock}>
                    <img
                        src={img}
                        className={classes.game__imgBlock__img}
                        style={{opacity: imgLoaded ? 1 : 0}}
                        loading="lazy"
                        onLoad={handleImgLoading}
                    />
                    {!imgLoaded &&
                        <img
                            src={imgSmall}
                            className={classes.game__imgBlock__imgSmall}
                            loading="lazy"
                        />
                    }
                </div>
            </Link>
        </div>
    );
};

export default GameBlock;