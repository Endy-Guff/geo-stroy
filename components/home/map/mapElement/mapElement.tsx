import React, {FC, RefObject} from 'react';

import s from './mapElement.module.scss'

interface MapElementProps {
    elementInfo: any
}

export const MapElement: FC<MapElementProps> = ({}) => {
    return (
        <div className={s.wrapper} >
            123
        </div>
    );
};
