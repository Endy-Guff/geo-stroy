import React, {useEffect, useMemo} from 'react';
import s from './homeObjects.module.scss'
import Image from "next/image";
import bg from '../../../assets/images/objectsBg.png'
import {Title} from "../../title/title";
import {ContainerLayout} from "../../containerLayout/containerLayout";
import {HomeObjectsItems} from "./homeObjectsItems";
import {HomeObjectsItem} from "./homeObjectsItem";
// import {useGetComplexesQuery, useGetComplexQuery, useGetFacadesQuery} from "../../../services/api/complexesApi";
import {useAppDispatch, useAppSelector} from "../../../services/store";
import {complexesSlice, complexesThunks} from "../../../services/complexesSlice";
import {PortfolioHomeObjectType} from "../../../services/homeObjectsPortfolioSlice";
import {useRouter} from "next/router";

export const HomeObjects = () => {
        const router = useRouter();
        const dispatch = useAppDispatch()
        const {fetchComplexes, fetchFacades} = complexesThunks
        const homeObjectsPortfolio = useAppSelector<PortfolioHomeObjectType[]>(state => state.homeObjectsPortfolioSlice['by-the-centenary'])
        const complexes = useAppSelector(state => state.complexesSlice)
        console.log(complexes)
        useEffect(() => {
            dispatch(fetchComplexes())
            dispatch(fetchFacades())
        }, [])


        // const {data} = useGetComplexesQuery()
        // const {data: complex} = useGetComplexQuery({id: 3916043})
        // console.log(data)
        // const {data: facades} = useGetFacadesQuery()
        // console.log(facades)

        const mappedComplexes = complexes.map((complex) => complex.houses).flat().map((house, i) =>
            i < 2 ? <HomeObjectsItem key={house.id} house={house}
                                     onClick={() => router.push(`/homeObject/${house.id}`)}/> : null
        )


        return (
            <div className={s.wrapper}>
                <Title className={s.title}>Объекты</Title>
                <Image className={s.img} src={bg}/>
                <ContainerLayout>
                    <div className={s.inner} id={'objects'}>
                        <HomeObjectsItems title={'Актуальные Предложения'} showBtn={true} link={'/currentOffers'}>
                            {mappedComplexes}
                        </HomeObjectsItems>
                        <HomeObjectsItems title={'Портфолио Недвижимости'} showBtn={true} link={'/portfolio'}>
                            <>
                                <div className={s.item}>
                                    <Image className={s.itemImg} width={570} height={299} objectFit={"cover"}
                                           src={homeObjectsPortfolio[0].image}/>
                                    <h6 className={s.adress}>{homeObjectsPortfolio[0].address}</h6>
                                    <span className={s.type}>{homeObjectsPortfolio[0].name}</span>
                                </div>
                                <div className={s.item}>
                                    <Image className={s.itemImg} width={570} height={299} objectFit={"cover"}
                                           src={homeObjectsPortfolio[1].image}/>
                                    <h6 className={s.adress}>{homeObjectsPortfolio[1].address}</h6>
                                    <span className={s.type}>{homeObjectsPortfolio[1].name}</span>
                                </div>
                            </>
                        </HomeObjectsItems>
                    </div>
                </ContainerLayout>
            </div>
        );
    }
;
