import { createSlice } from "@reduxjs/toolkit";

export const apodSlice = createSlice({
    name: 'apod',
    initialState: { apod: [] },
    reducers: {
    }
})

export const selectApod = state => state.apod;
export default apodSlice.reducer;