import {createSlice} from "@reduxjs/toolkit";
import gameData from "../../data/quizical/defaultGameState";

const initialState = {
    correctAnswers:0,
    totalAnswers:0,
    totalQuestions: gameData.totalQuestions,
};

const quizicalScoreSlice = createSlice({
    name:"quizicalScore",
    initialState,
    reducers: {
        incrementCorrectAnswers: {
            reducer(state)
            {
               state.correctAnswers+=1;
            }
        },
        incrementTotalAnswers:{
            reducer(state){
                state.totalAnswers+=1;
            }
        },
        clearScore: {
            reducer(){
                return initialState;
            }
        }
    }
});

export const {incrementCorrectAnswers, incrementTotalAnswers, clearScore} = quizicalScoreSlice.actions;
export default quizicalScoreSlice.reducer;