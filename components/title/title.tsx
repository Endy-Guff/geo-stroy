import React, {FC, PropsWithChildren} from 'react';
import s from './title.module.scss'

interface TitleProps{
    className?: string
}

export const Title: FC<PropsWithChildren<TitleProps>> = ({children,className}) => {
    const classes = `${className} ${s.title}`

    return (
        <h2 className={classes}>
            {children}
        </h2>
    );
};
