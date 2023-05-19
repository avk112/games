import React, {useState} from 'react';
import classes from "./CartPage.module.scss";
import {useDispatch} from "react-redux";
import {cleanCart} from "../../../redux/cart";
import MyButton from "../../UI/buttons/MyButton";
import OrdersBlock from "./OrdersBlock";


const CartPage = () => {
    const dispatch=useDispatch();
    const [cartIsEmpty, setCartIsEmpty] = useState(false);

    const emptyCart = ()=> {
        dispatch(cleanCart());
    };


    return(
            <div className={`gamePage ${classes.cart}`}>
                <h1 className="gamePage__title">
                    Games in your cart
                </h1>
                <div className={classes.cart__buyArea}>
                    <OrdersBlock
                        setCartIsEmpty ={setCartIsEmpty}
                    />
                    {!cartIsEmpty &&
                        <MyButton
                            text="Clean Cart"
                            click={emptyCart}
                        />
                    }
                    </div>
            </div>
    )
}

export default CartPage;