import {createSlice} from "@reduxjs/toolkit";

const initialState = [];


const cartSlice = createSlice({
        name: "cart",
        initialState,
        reducers:
                {
                    addGame:{
                        reducer(state, action)
                        {
                            return [...state, action.payload]
                        },
                        prepare(game)
                        {
                            return {
                                payload: game
                            }
                        }
                    },

                    delGame: {
                        reducer(state, action)
                        {
                            return state.filter((game)=>{return game.id!==action.payload});
                        },
                        prepare(id) {
                            return {
                                payload: id
                            };
                        }
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

export default cartSlice.reducer;