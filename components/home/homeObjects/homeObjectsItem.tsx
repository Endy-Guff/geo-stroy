import React from 'react';
import s from './homeObjects.module.scss'
import Image from "next/image";
import img from '../../../assets/images/homeObject1.jpg'
import {ButtonWithArrow} from "../../buttonWithArrow/buttonWithArrow";

interface HomeObjectsItemProps {
    item: any
}

export const HomeObjectsItem = () => {
    return (
        <div className={s.item}>
            <Image className={s.itemImg} src={img}/>
            <h6 className={s.adress}>Башкортостан Республика, г. Белорецк, ул. Овчаренко, д. 10</h6>
            <span className={s.type}>Жилой дом</span>
            <ButtonWithArrow>Смотреть Объект №1</ButtonWithArrow>
        </div>
    );
};
