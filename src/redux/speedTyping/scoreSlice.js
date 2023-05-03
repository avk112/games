import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    maxTime: 0,
    wordsToType: 0,
    typedWords:0,
};

const speedTypingScoreSlice = createSlice({
    name: "speedTypingScore",
    initialState,
    reducers: {
        setTypingScore: {
            reducer(state,action){
                const {maxTime, wordsToType} = action.payload;
               return {maxTime: maxTime, wordsToType: wordsToType, typedWords: 0}
            },
        },
        setTypedWords: {
            reducer(state, action){
               if(action.payload.typedWords !== state.typedWords){
                   state.typedWords = action.payload.typedWords;
               }
            }
        },
    }
});

export const {setTypingScore, setTypedWords} = speedTypingScoreSlice.actions;
export default speedTypingScoreSlice.reducer;