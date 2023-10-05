import React, {FC, PropsWithChildren} from 'react';
import s from './map.module.scss'
import Image from "next/image";

interface MapInfoItemProps{
    image: string
}
export const MapInfoItem:FC<PropsWithChildren<MapInfoItemProps>> = ({image, children}) => {
    return (
        <div className={s.infoItem}>
            <Image className={s.icon} src={image}/>
            <p className={s.text}>{children}</p>
        </div>
    );
};
