import { createSlice } from "@reduxjs/toolkit";

const errorModalSlice = createSlice({
    name: "errorModal",
    initialState: {
        value: {
            vissablity: false,
            payload: {
                title: "",
                description: ""
            }
        }
    },
    reducers: {
        showErrorModal: (state, action) => {
            state.value = action.payload
        }
    }
})

export default errorModalSlice.reducer
export const { showErrorModal } = errorModalSlice.actions