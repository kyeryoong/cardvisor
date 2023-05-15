import { createSlice } from "@reduxjs/toolkit";

let selectedBrands = createSlice({
    name: "selectedBrands",
    initialState: [],
    reducers: {
        setSelectedBrands(state, action) {
            state.push(0);
        }
    }
})

export let { setSelectedBrands } = selectedBrands.actions;

export default selectedBrands;