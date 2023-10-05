import React, {FC, PropsWithChildren} from 'react';
import s from './description.module.scss'
import arrowIcon from '../../../assets/images/arrow.svg'
import {StaticImageData} from "next/image";
import Image from "next/image";
import {ButtonWithArrow} from "../../buttonWithArrow/buttonWithArrow";

interface DescriptionItemProps {
    align?: 'normalize' | 'reverse'
    img: StaticImageData
    btn?: boolean
}

export const DescriptionItem: FC<PropsWithChildren<DescriptionItemProps>> = (
    {
        btn = false,
        align = 'normalize',
        img,
        children
    }) => {
    const classes = `${s.item} ${align === 'reverse' ? s.reverse : ''}`
    return (
        <div className={classes}>
            <p className={s.text}>
                {children}
                {btn && <ButtonWithArrow className={s.btn}>Читать подробнее</ButtonWithArrow>}
            </p>
            <Image className={s.img} src={img} alt="дом"/>
        </div>
    );
};
