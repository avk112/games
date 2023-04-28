import {createSlice} from "@reduxjs/toolkit";
import defaultGameState from "../../data/memesGenerator/defaultGameState";

const getInitialState = ()=>{
    let object = {};
    let i=1;
    while(i <= defaultGameState.linesNumber){
        object[i]={
            id: i,
            text: "",
            fontSize: 22
        };
        i++;
    }
    return object;
};


const initialState = getInitialState();


const linesSlice = createSlice({
    name: "lines",
    initialState,
    reducers:{
        changeText:{
            reducer(state, action){
                state[action.payload.id].text=action.payload.text;
            }
        },
        changeSize:{
            reducer(state, action){
                state[action.payload.id].fontSize+=action.payload.number;
            }
        },
        clearLines: {
            reducer(){
                return initialState;
            }
        }
    }
});

export const {changeText, changeSize, clearLines} = linesSlice.actions;
export default linesSlice.reducer;