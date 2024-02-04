import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import axios from "axios";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api',
    }),
    endpoints: () => ({}),
})

export const instance = axios.create({
    baseURL: "http://localhost:5000/api",
});