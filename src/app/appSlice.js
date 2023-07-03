import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAPOD } from "../data/api";

export const setInitialState = createAsyncThunk(
    'app/setInitialState',
    getAPOD)

export const appSlice = createSlice({
    name: 'app',
    initialState: { loading: true },
    reducers: {
        setLoading: (state, action) => {
            state.app.loading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(setInitialState.pending, (state, action) => {
        })
        builder.addCase(setInitialState.rejected, (state, action) => {
        })
        builder.addCase(setInitialState.fulfilled, (state, action) => {
        })
    }
})

export default appSlice.reducer;