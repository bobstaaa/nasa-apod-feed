import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAPOD, getExtraCards } from "../data/api";

export const setInitialState = createAsyncThunk(
    'app/setInitialState',
    getAPOD
)

export const addCards = createAsyncThunk(
    'app/addCards',
    getExtraCards
)

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
                state.cards = action.payload
                state.loading = false;
                return state;
            })
            .addCase(addCards.pending, (state) => {
                state.addingCards = true;
            })
    }
})

export const selectAppLoading = state => state.app.loading
export const selectCards = state => state.app.cards
export const { setLoading } = appSlice.actions
export default appSlice.reducer;