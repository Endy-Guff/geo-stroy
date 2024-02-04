import React, {FC, useEffect, useState} from 'react';
import {useAppSelector} from "../../services/store";
import {findHouseById} from "../../utils";
import axios from "axios";
import {ReactSVG} from 'react-svg'


export interface IHomeObjectProps {
    id: string
}

export const HomeObjectPage: FC<IHomeObjectProps> = ({id}) => {
    const [svg, setSvg] = useState<any[]>(null)
    const complexes = useAppSelector((state) => state.complexesSlice)
    const house = findHouseById(complexes, Number(id))
    const images = house?.images?.filter(image => image.file_ext === 'svg').map((image) => axios.get(image.file_url))
    useEffect(() => {
        if (images) {
            Promise.all(images).then(res => setSvg(res))
        }
    }, [house])
    console.log(svg)
    return (
        <div style={{position: 'relative', width: '100%', height: '100%', maxWidth: 1920, maxHeight: 1080}}>
            {svg?.map((svg) => <div
                style={{position: 'absolute', width: '100%', height: '100%', maxWidth: 1920, maxHeight: 1080}}
                onClick={(e) => console.log(e.target)}
                dangerouslySetInnerHTML={{__html: svg.data}}></div>)}
        </div>
    );
};

