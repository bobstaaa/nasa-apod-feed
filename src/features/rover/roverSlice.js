import { createSlice } from "@reduxjs/toolkit";

export const roverSlice = createSlice({
    name: 'rover',
    initialState: {},
    reducers: {

    }
})

export const selectRover = state => state.rover;
export default roverSlice.reducer;