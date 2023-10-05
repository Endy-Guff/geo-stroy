import React from 'react';
import s from './map.module.scss'
import {MapInfoItem} from "./mapInfoItem";
import icon1 from '../../../assets/images/mapIcon1.svg'
import icon2 from '../../../assets/images/mapIcon2.svg'

export const MapInfo = () => {
    return (
        <div className={s.infoWrapper}>
            <MapInfoItem image={icon1}>
                Районы, в которых располагаются наши строительные объекты
            </MapInfoItem>
            <MapInfoItem image={icon2}>
                Если навести курсор на выделенный район, можно узнать какие объекты построены в этом регионе
            </MapInfoItem>
        </div>
    );
};
