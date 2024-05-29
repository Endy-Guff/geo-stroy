import React, {FC, useState} from 'react';
import s from '../homeObject.module.scss'
import {PortfolioHomeObjectType} from "../../../services/homeObjectsPortfolioSlice";
import Image from "next/image";

interface HomeItemProps {
    item: PortfolioHomeObjectType
}

export const HomeItem: FC<HomeItemProps> = ({item: {image, name, address}}) => {
    const [activeImage, setActiveImage] = useState(0)
    return (
        <div className={s.homeItem}>
            <img className={s.img} src={Array.isArray(image) ? image[activeImage].src : image.src}
                   onClick={() => setActiveImage(prev => prev === 0 ? 1 : 0)}
            />
            <span className={s.name}>{name}</span>
            <span className={s.address}>{address}</span>
        </div>
    );
};
