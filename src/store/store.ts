import { configureStore } from "@reduxjs/toolkit";
import successModalSlice from "./slices/successModalSlice";
import ErrorModalSlice from "./slices/ErrorModalSlice";
import AddCategoryModalSlice from "./slices/AddCategoryModalSlice";

const store = configureStore({
    reducer: {
        successModal: successModalSlice,
        errorModal: ErrorModalSlice,
        addCategoryModal: AddCategoryModalSlice
    }
})

export default store