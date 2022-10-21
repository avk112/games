import {createSlice} from "@reduxjs/toolkit";

const userData = JSON.parse(localStorage.getItem("userData"));

const initialState = {
    registered: false,
    ...userData
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
                delUser: {
                    reducer(state)
                    {
                        localStorage.removeItem("userData")
                        return {
                            registered: false
                        }
                    }
                },

                addUser:{
                    reducer(state)
                    {
                        return JSON.parse(localStorage.getItem("userData"));
                    }
                }
            }
    })

export const {addUser, delUser} = userSlice.actions;
export default userSlice.reducer;