import { createSlice } from "@reduxjs/toolkit";

export const apodSlice = createSlice({
    name: 'apod',
    initialState: { apod: [] },
    reducers: {
    }
})

export default apodSlice.reducer;