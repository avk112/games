import {createSelector, createSlice} from "@reduxjs/toolkit";

const initialState = {};


const cartSlice = createSlice({
        name: "cart",
        initialState,
        reducers:
                {
                    addGame:{
                        reducer(state, action)
                        {
                            state[action.payload.game.id]= action.payload.game;
                        },
                    },
                    delGame: {
                        reducer(state, action)
                        {
                            delete state[action.payload.id];
                        },
                    },
                    cleanCart:{
                        reducer(state)
                        {
                            return initialState;
                        }
                    }
            }
})

export const {addGame, delGame, cleanCart} = cartSlice.actions;
export const isGameBought = (state,Id)=>{return state.cart[Id]};

export default cartSlice.reducer;