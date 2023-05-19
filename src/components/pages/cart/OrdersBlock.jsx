import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {delGame} from "../../../redux/cart";
import classes from "./OrdersBlock.module.scss";
import trashCan from "../../../image/trash-can.png";

const OrdersBlock = ({setCartIsEmpty}) => {
    const boughtGames = useSelector(state=>state.cart)
    const dispatch=useDispatch();


    const getTotalPrice = ()=> {
        let newPrice = 0;
        Object.keys(boughtGames).map((game, index)=>{
            return newPrice = newPrice+=boughtGames[game].price;
        });
        return newPrice;
    };

    const deleteGame = (id)=>{
        dispatch(delGame({id:id}))
    };

    const emptyOrdersBlock = <h3 className={classes.orders__empty}>
                                No games in cart yet...
                             </h3>;

    const gamesBlock = Object.keys(boughtGames).map((game, index)=>{
        const {name,price, id} = boughtGames[game];
        return (
            <div key={index} className={classes.orders__game}>
                <h3 className={classes.orders__game__name}>{name}</h3>
                <h3 className={classes.orders__game__price}>${price}</h3>
                <div className={classes.orders__game__del}>
                    <img src={trashCan} onClick={()=>deleteGame(id)} title="Delete" />
                </div>
            </div>
        )
    });

    useEffect(()=>{
        Object.keys(boughtGames).length ===0 && setCartIsEmpty(true);
    }, [boughtGames]);


    return (
            <div className={classes.orders}>
                {gamesBlock.length>0
                 ? <>
                    {gamesBlock}
                    <div className={classes.orders__total}>
                        <h3>Total:</h3>
                        <h3>${getTotalPrice()}</h3>
                    </div>
                    </>
                : emptyOrdersBlock
                }
            </div>

    );
};

export default OrdersBlock;