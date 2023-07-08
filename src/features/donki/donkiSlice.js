import { createSlice } from "@reduxjs/toolkit";

export const donkiSlice = createSlice({
    name: 'donki',
    initialState: {},
    reducers: {

    }
})

export const selectDonki = state => state.donki;
export default donkiSlice.reducer;