import { configureStore } from "@reduxjs/toolkit";

import auth2Data from "./authSlice";

export default configureStore({
    reducer: {
        auth2Data: auth2Data.reducer
    }
})