import React, {ComponentProps, FC, PropsWithChildren} from 'react';
import s from './buttonWithArrow.module.scss'
import arrowIcon from "../../assets/images/arrow.svg";
import Image from "next/image";
import {ArrowIcon} from "../../assets/icons/arrow";

interface ButtonWithArrowProps extends ComponentProps<'button'>{
    className?: string
    color?: string
}

export const ButtonWithArrow:FC<PropsWithChildren<ButtonWithArrowProps>> = ({children,className,color, ...restProps}) => {
    const classNames = `${s.btn} ${className}`
    return (
        <button className={classNames} {...restProps}>
            {children}
            <ArrowIcon color={color}/>
        </button>
    );
};
