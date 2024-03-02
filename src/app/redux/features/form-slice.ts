import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    formData: []
}


const formDataSlice = createSlice({
    name: 'form-data',
    initialState,
    reducers: {
        addFormData: (state, action) => {
            state.formData = action.payload
        }
    }
})

export const {addFormData} = formDataSlice.actions
export default formDataSlice.reducer