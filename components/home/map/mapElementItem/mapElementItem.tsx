import React, {FC} from 'react';
import s from './mapElementItem.module.scss'
import Image, {StaticImageData} from "next/image";

interface MapElementItemProps {
    image: StaticImageData
    title: string
    subtitle: string
}

export const MapElementItem: FC<MapElementItemProps> = ({image, subtitle, title}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <Image className={s.img} src={image} objectFit={'cover'} width={110} height={80}/>
                <div className={s.info}>
                    <p className={s.text}>{title}</p>
                    <span className={s.subtext}>{subtitle}</span>
                </div>
            </div>
        </div>
    );
};

