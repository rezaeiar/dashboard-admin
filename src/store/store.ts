import { configureStore } from "@reduxjs/toolkit";
import successModalSlice from "./slices/successModalSlice";
import ErrorModalSlice from "./slices/ErrorModalSlice";

const store = configureStore({
    reducer: {
        successModal: successModalSlice,
        errorModal: ErrorModalSlice
    }
})

export default store