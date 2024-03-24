import { createSlice } from "@reduxjs/toolkit";

const confirmModalSlice = createSlice({
    name: "confirmModal",
    initialState: {
        value: {
            visibility: false,
            payload: {
                title: "",
                description: "",
            },
            button: "Continue",
            handler: null
        }
    },
    reducers: {
        showConfirmModal: (state, action) => {
            state.value = action.payload
        }
    }
})

export default confirmModalSlice.reducer
export const { showConfirmModal } = confirmModalSlice.actions