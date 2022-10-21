import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cart";
import userReducer from "./user";

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer
    }
})

export default store;