import { createSlice } from "@reduxjs/toolkit";

const successModalSlice = createSlice({
    name: "successModal",
    initialState: {
        value: {
            visibility: false,
            payload: {
                title: "",
                description: ""
            }
        }
    },
    reducers: {
        showSuccessModal: (state, action) => {
            state.value = action.payload
        }
    }
})

export default successModalSlice.reducer
export const { showSuccessModal } = successModalSlice.actions