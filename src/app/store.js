import { configureStore } from '@reduxjs/toolkit'
import appReducer from './appSlice'
import apodReducer from '../features/apod/apodSlice'
import roverReducer from '../features/rover/roverSlice'
import { setInitialState } from './appSlice'

export const store = configureStore({
    reducer: {
        app: appReducer,
        apod: apodReducer,
        rover: roverReducer,
    },
});

store.dispatch(setInitialState())