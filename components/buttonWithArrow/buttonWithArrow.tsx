import React, {ComponentProps, FC, PropsWithChildren} from 'react';
import s from './buttonWithArrow.module.scss'
import arrowIcon from "../../assets/images/arrow.svg";
import Image from "next/image";

interface ButtonWithArrowProps extends ComponentProps<'button'>{
    className?: string
}

export const ButtonWithArrow:FC<PropsWithChildren<ButtonWithArrowProps>> = ({children,className, ...restProps}) => {
    const classNames = `${s.btn} ${className}`
    return (
        <button className={classNames} {...restProps}>
            {children}
            <Image src={arrowIcon} alt="стрелка"/>
        </button>
    );
};
