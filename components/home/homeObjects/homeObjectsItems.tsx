import React, {FC, PropsWithChildren} from 'react';
import s from './homeObjects.module.scss'
import {ButtonWithArrow} from "../../buttonWithArrow/buttonWithArrow";

interface HomeObjectsItemsProps{
    title: string
}

export const HomeObjectsItems:FC<PropsWithChildren<HomeObjectsItemsProps>> = ({children,title}) => {
    return (
        <div className={s.items}>
            <h5 className={s.itemsTitle}>{title}</h5>
            <div className={s.itemsContainer}>
                {children}
            </div>
            <ButtonWithArrow className={s.btn} color={'#fff'}>Смотреть все</ButtonWithArrow>
        </div>
    );
};
