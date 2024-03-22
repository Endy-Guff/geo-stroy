import React, {FC, PropsWithChildren} from 'react';
import s from './homeObjects.module.scss'
import {ButtonWithArrow} from "../../buttonWithArrow/buttonWithArrow";
import Link from "next/link";

interface HomeObjectsItemsProps {
    title: string
    showBtn?: boolean
    link?: string
}

export const HomeObjectsItems: FC<PropsWithChildren<HomeObjectsItemsProps>> = ({children,link, title, showBtn=false}) => {
    return (
        <div className={s.items}>
            <h5 className={s.itemsTitle}>{title}</h5>
            <div className={s.itemsContainer}>
                {children}
            </div>
            {showBtn && <Link href={link}><ButtonWithArrow className={s.btn} color={'#19297C'}>Смотреть
                все</ButtonWithArrow></Link>}
        </div>
    );
};
