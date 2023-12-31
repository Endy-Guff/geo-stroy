import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'

import {baseApi} from "./api/baseApi";
import {homeObjectsReducer, homeObjectsSlice} from "./homeObjectsSlice";
import {mapElementReducer, mapElementSlice} from "./mapElementSlice";

const reducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    [homeObjectsSlice.name]: homeObjectsReducer,
    [mapElementSlice.name]: mapElementReducer
})

export const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

