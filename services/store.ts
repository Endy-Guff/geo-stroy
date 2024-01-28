import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'

import {baseApi} from "./api/baseApi";
import {homeObjectsPortfolioReducer, homeObjectsPortfolioSlice} from "./homeObjectsPortfolioSlice";
import {mapElementReducer, mapElementSlice} from "./mapElementSlice";
import {complexesSlice, complexesSliceReducer} from "./complexesSlice";

const reducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    [complexesSlice.name]: complexesSliceReducer,
    [homeObjectsPortfolioSlice.name]:
    homeObjectsPortfolioReducer,
    [mapElementSlice.name]:
    mapElementReducer
})

export const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof reducer>;

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

