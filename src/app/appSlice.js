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
        builder
            .addCase(setInitialState.pending, (state) => {
            })
            .addCase(setInitialState.rejected, (state) => {
                state.loading = false;
                return state;
            })
            .addCase(setInitialState.fulfilled, (state) => {
                state.loading = false;
                return state;
            })
    }
})

export const { setLoading } = appSlice.actions
export default appSlice.reducer;