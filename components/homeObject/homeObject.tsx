import React, {useState} from 'react';
import s from './homeObject.module.scss'
import {Tabs} from "./tabs/tabs";
import {HomeObjectsSliceInitialStateKeyType, PortfolioHomeObjectType} from "../../services/homeObjectsSlice";
import {Title} from "../title/title";
import {HomeItem} from "./homeItem/homeItem";
import {useAppSelector} from "../../services/store";

export const HomeObjectPage = () => {
    const [activeValue, setActiveValue] = useState<HomeObjectsSliceInitialStateKeyType>('by-the-centenary')
    const homeObjects = useAppSelector<PortfolioHomeObjectType[]>(state => state.homeObjectsSlice[activeValue])

    return (
        <div>
            <Title className={s.title}>Портфолио недвижимости</Title>
            <Tabs activeValue={activeValue} setActive={setActiveValue}/>
            <div className={s.homeList}>
                {homeObjects.map(home => <HomeItem item={home}/>)}
            </div>
        </div>
    );
};

