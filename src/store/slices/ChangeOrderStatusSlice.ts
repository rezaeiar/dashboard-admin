import { createSlice } from "@reduxjs/toolkit";

const changeOrderStatusSlice = createSlice({
    name: "changeOrderStatusModal",
    initialState: {
        value: {
            visibility: false,
            orderId: null
        }
    },
    reducers: {
        showChangeOrderStatusModal: (state, action) => {
            state.value = action.payload
        }
    }
})

export default changeOrderStatusSlice.reducer
export const { showChangeOrderStatusModal } = changeOrderStatusSlice.actions