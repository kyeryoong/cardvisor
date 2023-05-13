import { createSlice } from "@reduxjs/toolkit";

let auth2Data = createSlice({
    name: "auth2",
    initialState: 0,
    reducers: {
        setAuth2(state, action) {
            return state + action.payload
        }
    }
})

export let { setAuth2 } = auth2Data.actions;

export default auth2Data;