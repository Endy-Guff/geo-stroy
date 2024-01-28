import {baseApi, instance} from "./baseApi";
import {GetComplexesResponseType, GetComplexResponseType, IHouseImage} from "../../common/types";
//
// const complexesApi = baseApi.injectEndpoints({
//     endpoints: builder => {
//         return {
//             getComplexes: builder.query<GetComplexesResponseType, void>({
//                 query: () => {
//                     return {
//                         url: `/getComplexes`,
//                     }
//                 }
//             }),
//             getComplex: builder.query<GetComplexResponseType, {id: number}>({
//                 query: ({id}) => {
//                     return {
//                         url: `/getComplex/${id}`,
//                     }
//                 }
//             }),
//             getFacades: builder.query<GetComplexesResponseType, void>({
//                 query: () => {
//                     return {
//                         url: `/getFacades`,
//                     }
//                 }
//             }),
//         }
//     }
// })
//
// export const {useGetComplexesQuery,useGetComplexQuery, useGetFacadesQuery} = complexesApi
//

export const complexesApi = {
    getComplexes: () => instance.get<GetComplexesResponseType>('/getComplexes'),
    getFacades: () => instance.get<IHouseImage[]>('/getFacades'),
}