import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    users: [],
    isLoading: false,
    error: '',
    count: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment(state, action) {
            state.count += action.payload
        }
    }
})

export default userSlice.reducer;