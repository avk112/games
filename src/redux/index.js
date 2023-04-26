import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cart";
import userReducer from "./user";
import quizicalScoreReducer from "./quizical/scoreSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        quizicalScore: quizicalScoreReducer,
    }
})

export default store;