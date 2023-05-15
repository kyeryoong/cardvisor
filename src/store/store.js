import { configureStore } from "@reduxjs/toolkit";

import auth from "./authSlice";
import selectedBrands from "./selectedBrandsSlice";

export default configureStore({
    reducer: {
        auth: auth.reducer,
        selectedBrands: selectedBrands.reducer
    }
})