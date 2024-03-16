import { createSlice } from "@reduxjs/toolkit";

const AddOrderModalSlice = createSlice({
    name: "addOrderModal",
    initialState: {
        value: {
            vissablity: false,
        }
    },
    reducers: {
        showAddOrderModal: (state, action) => {
            state.value = action.payload
        }
    }
})

export default AddOrderModalSlice.reducer
export const { showAddOrderModal } = AddOrderModalSlice.actions