import React, {FC, useEffect} from 'react';
import {useAppSelector} from "../../services/store";
import {findHouseById} from "../../utils";
import axios from "axios";
import {ReactSVG} from 'react-svg'


export interface IHomeObjectProps {
    id: string
}

export const HomeObjectPage: FC<IHomeObjectProps> = ({id}) => {
    const complexes = useAppSelector((state) => state.complexesSlice)
    const house = findHouseById(complexes, Number(id))
    const images = house?.images?.filter(image => image.file_ext === 'svg')
    let image = images?.[0]?.file_url
    useEffect(() => {
        if (images?.[0]?.file_url) {
            axios.get(images?.[0]?.file_url).then(res => {
                image = res.data
                console.log(res.data)
            })
        }
    })
    console.log(image)
    return (
        <div>
            <ReactSVG src={image}/>
            <object data={image} type="image/svg+xml"></object>

        </div>
    );
};

