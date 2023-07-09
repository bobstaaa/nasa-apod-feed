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
                state.loading = true;
            })
            .addCase(setInitialState.rejected, (state) => {
                state.loading = false;
                return state;
            })
            .addCase(setInitialState.fulfilled, (state, action) => {
                state.card = action.payload
                state.loading = false;
                return state;
            })
    }
})

export const selectAppLoading = state => state.app.loading
export const selectHomeCard = state => state.app.card
export const { setLoading } = appSlice.actions
export default appSlice.reducer;