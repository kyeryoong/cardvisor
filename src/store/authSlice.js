import { createSlice } from "@reduxjs/toolkit";

let auth = createSlice({
    name: "auth",
    initialState: {},
    reducers: {
        setAuth(state, action) {
            return action.payload
        }
    }
})

export let { setAuth } = auth.actions;

export default auth;