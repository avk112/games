import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cart";
import userReducer from "./user";
import quizicalScoreReducer from "./quizical/scoreSlice";
import memeGeneratorLinesReducer from "./memeGenerator/linesSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        quizicalScore: quizicalScoreReducer,
        memesLines: memeGeneratorLinesReducer,
    }
})

export default store;