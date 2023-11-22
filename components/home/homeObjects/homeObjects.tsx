import React from 'react';
import s from './homeObjects.module.scss'
import Image from "next/image";
import bg from '../../../assets/images/objectsBg.jpg'
import {Title} from "../../title/title";
import {ContainerLayout} from "../../containerLayout/containerLayout";
import {HomeObjectsItems} from "./homeObjectsItems";
import {HomeObjectsItem} from "./homeObjectsItem";
import {useGetComplexesQuery, useGetFacadesQuery} from "../../../services/api/complexesApi";
import {useAppSelector} from "../../../services/store";
import {PortfolioHomeObjectType} from "../../../services/homeObjectsSlice";

export const HomeObjects = () => {

    const {data} = useGetComplexesQuery()
    const homeObjectsPortfolio = useAppSelector<PortfolioHomeObjectType[]>(state => state.homeObjectsSlice['by-the-centenary'])
    const {data: facades} = useGetFacadesQuery()
    console.log(facades)
    return (
        <div className={s.wrapper}>
            <Title className={s.title}>Объекты</Title>
            <Image className={s.img} src={bg}/>
            <ContainerLayout>
                <div className={s.inner} id={'objects'}>
                    <HomeObjectsItems title={'Актуальные Предложения'}>
                        {data?.complexes.map((complex) =>
                            complex.houses.map(house =>
                                <HomeObjectsItem key={house.id} house={house}/>
                            ))}
                    </HomeObjectsItems>
                    <HomeObjectsItems title={'Портфолио Недвижимости'} showBtn={true} link={'/homeObject'}>
                        <>
                            <div className={s.item}>
                                <Image className={s.itemImg} width={570} height={299} objectFit={"cover"} src={homeObjectsPortfolio[0].image}/>
                                <h6 className={s.adress}>{homeObjectsPortfolio[0].address}</h6>
                                <span className={s.type}>{homeObjectsPortfolio[0].name}</span>
                            </div>
                            <div className={s.item}>
                                <Image className={s.itemImg} width={570} height={299} objectFit={"cover"} src={homeObjectsPortfolio[1].image}/>
                                <h6 className={s.adress}>{homeObjectsPortfolio[1].address}</h6>
                                <span className={s.type}>{homeObjectsPortfolio[1].name}</span>
                            </div>
                        </>
                    </HomeObjectsItems>
                </div>
            </ContainerLayout>
        </div>
    );
};
