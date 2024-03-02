import { configureStore } from "@reduxjs/toolkit";
import FormReducer from "../features/form-slice"
export const store = configureStore({
    reducer:{
        form_data: FormReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch