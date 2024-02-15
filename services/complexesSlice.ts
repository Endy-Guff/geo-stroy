import {createSlice} from "@reduxjs/toolkit";
import {IComplex, IComplexResponse, IHouseImage} from "../common/types";
import {createAppAsyncThunk} from "../common/createAppAsyncThunk";
import {complexesApi} from "./api/complexesApi";

const initialState: IComplex[] = []

const fetchComplexes = createAppAsyncThunk<{ complexes: IComplexResponse[] }>(
    "complexesSlice/fetchComplexes",
    async () => {
        const res = await complexesApi.getComplexes();
        return {complexes: res.data.complexes}
    },
);

const fetchFacades = createAppAsyncThunk<{ facades: IHouseImage[] }>(
    "complexesSlice/fetchFacades",
    async () => {
        const res = await complexesApi.getFacades();
        return {facades: res.data}
    },
);

export const complexesSlice = createSlice({
    name: 'complexesSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchComplexes.fulfilled, (_, action) => {
                    const complexes: IComplex[] = action.payload.complexes?.map(complex => ({
                        ...complex,
                        houses: complex.houses.map(house => ({...house, images: [] as IHouseImage[ ]}))
                    }))
                    return complexes
                }
            )
            .addCase(fetchFacades.fulfilled, (state, action) => {
                action.payload.facades.forEach((facade) => {
                    state.forEach(complex => {
                        const house = complex.houses.find(house => house.id === facade.estate_id)
                        if (house) {
                            house.images.push(facade)
                        }
                    })
                })
            })
    }
})

export const complexesSliceReducer = complexesSlice.reducer
export const complexesThunks = {fetchComplexes, fetchFacades}