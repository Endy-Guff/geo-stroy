import React from 'react';
import s from './homeObjects.module.scss'
import Image from "next/image";
import bg from '../../../assets/images/objectsBg.jpg'
import {Title} from "../../title/title";
import {ContainerLayout} from "../../containerLayout/containerLayout";
import {HomeObjectsItems} from "./homeObjectsItems";
import {HomeObjectsItem} from "./homeObjectsItem";
import {useGetComplexesQuery, useGetFacadesQuery} from "../../../services/api/complexesApi";

export const HomeObjects = () => {

    const {isLoading, data} = useGetComplexesQuery()
    console.log(data)
    return (
        <div className={s.wrapper}>
            <Title className={s.title}>Объекты</Title>
            <Image className={s.img} src={bg}/>
            <ContainerLayout>
                <HomeObjectsItems title={'Актуальные Предложения'}>
                    {data?.complexes.map((complex) =>
                        complex.houses.map(house =>
                            <HomeObjectsItem key={house.id} house={house}/>
                        ))}
                </HomeObjectsItems>
                <HomeObjectsItems title={'Портфолио Недвижимости'}>
                </HomeObjectsItems>
            </ContainerLayout>
        </div>
    );
};
