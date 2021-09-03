import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../Reducers/userSlice"
import taskReducer from "../Reducers/taskSlice"

export default configureStore({
    reducer:{
        user:userReducer,
        task:taskReducer,
    },
})
    