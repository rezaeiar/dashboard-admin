import { createSlice } from "@reduxjs/toolkit";

const AddTaskModalSlice = createSlice({
    name: "addTaskModal",
    initialState: {
        value: {
            visibility: false,
        }
    },
    reducers: {
        showAddTaskModal: (state, action) => {
            state.value = action.payload
        }
    }
})

export default AddTaskModalSlice.reducer
export const { showAddTaskModal } = AddTaskModalSlice.actions