import { configureStore } from "@reduxjs/toolkit";
import successSlice from "./slices/successSlice";

const store = configureStore({
    reducer: {
        success: successSlice
    }
})

export default store