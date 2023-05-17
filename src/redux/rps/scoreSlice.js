import {createSlice} from "@reduxjs/toolkit";

const initialState = {
        user: 0,
        opponent: 0,
}

const rpsScoreSlice = createSlice({
    name: "rpsScore",
    initialState,
    reducers: {
        increment: {
            reducer(state, action){
                state[action.payload.player]+=1;
            }
        },
        refresh:{
            reducer(){
                return initialState;
            }
        }
    }
});

export const {increment, refresh} = rpsScoreSlice.actions;
export default rpsScoreSlice.reducer;