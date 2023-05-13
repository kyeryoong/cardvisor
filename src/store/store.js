import { configureStore } from "@reduxjs/toolkit";

import auth from "./authSlice";

export default configureStore({
    reducer: {
        auth: auth.reducer
    }
})