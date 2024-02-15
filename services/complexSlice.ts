import {createSlice} from "@reduxjs/toolkit";
import {IComplex, IComplexResponse, IHouseImage} from "../common/types";
import {createAppAsyncThunk} from "../common/createAppAsyncThunk";
import {complexesApi} from "./api/complexesApi";

const initialState: any = []

const fetchComplex = createAppAsyncThunk<{ complex: any }, { id: string }>(
    "complexesSlice/fetchComplexes",
    async ({id}) => {
        const res = await complexesApi.getComplex(id);
        return {complex: res.data}
    },
);

export const complexSlice = createSlice({
    name: 'complexSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchComplex.fulfilled, (_, action) => action.payload.complex
            )
    }
})

export const complexSliceReducer = complexSlice.reducer
export const complexThunks = {fetchComplex}