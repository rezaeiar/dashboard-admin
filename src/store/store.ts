import { configureStore } from "@reduxjs/toolkit";
import successModalSlice from "./slices/successModalSlice";

const store = configureStore({
    reducer: {
        successModal: successModalSlice
    }
})

export default store