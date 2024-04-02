import { createSlice } from "@reduxjs/toolkit";

const ChangePasswordModalSlice = createSlice({
    name: "changePasswordModal",
    initialState: {
        value: {
            visibility: false,
        }
    },
    reducers: {
        ShowChangePasswordModal: (state, action) => {
            state.value = action.payload
        }
    }
})

export default ChangePasswordModalSlice.reducer
export const { ShowChangePasswordModal } = ChangePasswordModalSlice.actions