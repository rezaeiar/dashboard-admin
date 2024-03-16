import { configureStore } from "@reduxjs/toolkit";
import successModalSlice from "./slices/successModalSlice";
import ErrorModalSlice from "./slices/ErrorModalSlice";
import AddCategoryModalSlice from "./slices/AddCategoryModalSlice";
import ConfirmModalSlice from "./slices/ConfirmModalSlice";
import AddOrderModalSlice from "./slices/AddOrderModalSlice";

const store = configureStore({
    reducer: {
        successModal: successModalSlice,
        errorModal: ErrorModalSlice,
        addCategoryModal: AddCategoryModalSlice,
        confirmModal: ConfirmModalSlice,
        addOrderModal: AddOrderModalSlice
    }
})

export default store