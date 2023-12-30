import React, {FC, RefObject} from 'react';

import s from './mapElement.module.scss'
import {MapElementItem} from "../mapElementItem/mapElementItem";
import {IMapElement} from "../../../../services/mapElementSlice";

interface MapElementProps {
    elementInfo?: IMapElement[]
}

export const MapElement: FC<MapElementProps> = ({elementInfo}) => {
    return (
        <div className={s.wrapper}>
            <h3 className={s.blockTitle}>{elementInfo?.[0].blockTitle}</h3>
            {elementInfo?.map(({image, title, subtitle}) => <MapElementItem image={image} title={title} subtitle={subtitle}
            />)}
        </div>
    );
};
