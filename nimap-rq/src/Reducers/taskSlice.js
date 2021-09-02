import {createSlice} from "@reduxjs/toolkit"

export const taskSlice = createSlice({
    name:"task",
    initialState:{
        task:null
    },
    reducers:{
        addTask:(state,action)=>{
            state.task = action.payload;
        },
        delTask:(state,action)=>{

        }
    }
})

export const {addTask,delTask} = taskSlice.actions;

const selectTask = (state) => state.task.task;

export default taskSlice.reducer;