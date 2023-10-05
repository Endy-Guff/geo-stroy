import React from 'react';
import s from './homeObjects.module.scss'
import Image from "next/image";
import bg from '../../../assets/images/objectsBg.jpg'
import {Title} from "../../title/title";
import {ContainerLayout} from "../../containerLayout/containerLayout";
import {HomeObjectsItems} from "./homeObjectsItems";
import {HomeObjectsItem} from "./homeObjectsItem";

export const HomeObjects = () => {
    return (
        <div className={s.wrapper}>
            <Title className={s.title}>Объекты</Title>
            <Image className={s.img} src={bg}/>
            <ContainerLayout>
                <HomeObjectsItems title={'Актуальные Предложения'}>
                    <HomeObjectsItem/>
                    <HomeObjectsItem/>
                </HomeObjectsItems>
            </ContainerLayout>
        </div>
    );
};
