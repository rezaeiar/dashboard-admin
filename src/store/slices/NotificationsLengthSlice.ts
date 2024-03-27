import { createSlice } from "@reduxjs/toolkit";

const notificationsLengthSlice = createSlice({
    name: "notificationLength",
    initialState: {
        value: 0
    },
    reducers: {
        setNotificationsLength: (state, action) => {
            state.value = action.payload
        }
    }
})

export default notificationsLengthSlice.reducer
export const { setNotificationsLength } = notificationsLengthSlice.actions