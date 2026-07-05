import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    status: false,
    userData: null
}

const authSlice= createSlice({
    name: "auth",
    initialState,
    reducers: {

        // The state parameter represents the current data inside this specific slice right before the reducer runs.
        // The action parameter is the messenger that carries new data from your React components to your Redux store.
        login: (state, action)=> {
            state.status= true;
            state.userData= action.payload.userData;
        },

        logout: (state)=> {
            state.status= false;
            state.userData= null;
        }
    }
})

export const {login, logout}= authSlice.actions;
export default authSlice.reducer;