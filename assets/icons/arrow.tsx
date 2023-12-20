import React, {FC} from 'react';

interface ArrowIconProps{
    color?: string
}

export const ArrowIcon:FC<ArrowIconProps> = ({color='#fff'}) => {
    return (
        <svg width="62" height="24" viewBox="0 0 62 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M61.0607 13.0607C61.6465 12.4749 61.6465 11.5251 61.0607 10.9393L51.5147 1.3934C50.9289 0.807611 49.9792 0.807611 49.3934 1.3934C48.8076 1.97919 48.8076 2.92893 49.3934 3.51472L57.8787 12L49.3934 20.4853C48.8076 21.0711 48.8076 22.0208 49.3934 22.6066C49.9792 23.1924 50.9289 23.1924 51.5147 22.6066L61.0607 13.0607ZM0 13.5H60V10.5H0L0 13.5Z"
                fill={color}/>
        </svg>
    );
};

