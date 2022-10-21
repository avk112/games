import React, {useEffect, useState} from 'react';
import trashCan from "../image/trash-can.png";
import {useDispatch, useSelector} from "react-redux";
import {cleanCart, delGame} from "../components/redux/cart";
import MyButton from "../components/UI/buttons/MyButton";


const CartPage = () => {
    const boughtGames = useSelector(state=>state.cart)
    const dispatch=useDispatch();

    const [totalPrice, setTotalPrice] = useState(0);

    const deleteGame = (id)=>{
        dispatch(delGame(id))
    }
    const emptyCart = ()=> {
        dispatch(cleanCart())
    }

    const gamesBlock = boughtGames.map((game, index)=>{

        return (
            <div key={index} className="cart--page--game">
                <img src={require("../"+game.img)} className="cart--page--game--img"/>
                <h3 className="cart--page--game--name">{game.name}</h3>
                <h3 className="cart--page--game--price">{game.price}$</h3>
                <img src={trashCan} onClick={()=>deleteGame(game.id)} className="cart--page--game--del"/>
            </div>
        )
    })

    useEffect(()=>{
        setTotalPrice(0);
        boughtGames.map(game=>setTotalPrice(prev=>prev+game.price))
    }, [boughtGames])

    return(
            <div className="cart--page">
                <h1>Games in your cart</h1>
                {gamesBlock}
                <h2>Total: {totalPrice}</h2>
                <MyButton
                text="Clean Cart"
                click={emptyCart}/>
            </div>
    )
}

export default CartPage;