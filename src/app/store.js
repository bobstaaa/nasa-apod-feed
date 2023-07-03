import { configureStore } from '@reduxjs/toolkit'
import appReducer from './appSlice'
import apodReducer from '../features/apod/apodSlice'
import donkiReducer from '../features/donki/donkiSlice'

export const store = configureStore({
    reducer: {
        app: appReducer,
        apod: apodReducer,
        donki: donkiReducer,
    },
});
