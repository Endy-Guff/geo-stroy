import React, {FC} from 'react';
import s from '../homeObject.module.scss'
import {PortfolioHomeObjectType} from "../../../services/homeObjectsPortfolioSlice";
import Image from "next/image";

interface HomeItemProps {
    item: PortfolioHomeObjectType
}

export const HomeItem: FC<HomeItemProps> = ({item: {image, name, address}}) => {
    return (
        <div className={s.homeItem}>
            <Image className={s.img} src={image}/>
            <span className={s.name}>{name}</span>
            <span className={s.address}>{address}</span>
        </div>
    );
};
