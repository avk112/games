import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cart";
import userReducer from "./user";
import quizicalScoreReducer from "./quizical/scoreSlice";
import memeGeneratorLinesReducer from "./memeGenerator/linesSlice";
import speedTypingScoreReducer from "./speedTyping/scoreSlice";
import rpsScoreReducer from "./rps/scoreSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        quizicalScore: quizicalScoreReducer,
        memesLines: memeGeneratorLinesReducer,
        speedTypingScore: speedTypingScoreReducer,
        rpsScore: rpsScoreReducer,
    }
})

export default store;