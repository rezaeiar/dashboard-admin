import { createSlice } from "@reduxjs/toolkit";

const AddCategoryModalSlice = createSlice({
    name: "addCategoryModal",
    initialState: {
        value: {
            visibility: false,
        }
    },
    reducers: {
        showAddCategoryModal: (state, action) => {
            state.value = action.payload
        }
    }
})

export default AddCategoryModalSlice.reducer
export const { showAddCategoryModal } = AddCategoryModalSlice.actions