import React, {FC, PropsWithChildren, useEffect} from 'react';
import {useAppDispatch} from "../../services/store";
import {complexesThunks} from "../../services/complexesSlice";

export const Initial: FC<PropsWithChildren> = ({children}) => {
    const dispatch = useAppDispatch()
    const {fetchComplexes, fetchFacades} = complexesThunks

    useEffect(() => {
        dispatch(fetchComplexes())
        dispatch(fetchFacades())
    }, [])

    return (
        children
    );
};

