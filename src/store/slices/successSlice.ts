import { createSlice } from "@reduxjs/toolkit";

const successSlice = createSlice({
    name: "success",
    initialState: {
        value: {
            vissablity: false,
        }
    },
    reducers: {
        changeState: (state, action) => {
            state.value = action.payload
        }
    }
})

export default successSlice.reducer
export const { changeState } = successSlice.actions