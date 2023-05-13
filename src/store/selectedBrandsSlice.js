import { createSlice } from "@reduxjs/toolkit";

let selectedBrands = createSlice({
    name: "selectedBrandsSlice",
    initialState: [],
    reducers: {
        setSelectedBrands(state) {
            return [0]
        }
    }
})

export let { setSelectedBrands } = selectedBrands.actions;

export default selectedBrands;