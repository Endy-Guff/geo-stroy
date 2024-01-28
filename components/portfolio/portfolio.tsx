import React, {useState} from 'react';
import s from './homeObject.module.scss'
import {ITabsOption, Tabs} from "./tabs/tabs";
import { PortfolioHomeObjectType} from "../../services/homeObjectsPortfolioSlice";
import {Title} from "../title/title";
import {HomeItem} from "./homeItem/homeItem";
import {useAppSelector} from "../../services/store";

const tabs: ITabsOption[] = [
    {id: 1, label: 'Объекты к 100-летию Республики Башкортостан', value: 'by-the-centenary'},
    {id: 2, label: 'Жилые дома', value: 'residential-estate'},
    {id: 3, label: 'Социальная недвижимость', value: 'social-estate'},
]

export const PortfolioPage = () => {
    const [activeValue, setActiveValue] = useState<string>('by-the-centenary')
    const homeObjects = useAppSelector<PortfolioHomeObjectType[]>(state => state.homeObjectsPortfolioSlice[activeValue])

    return (
        <div>
            <Title className={s.title}>Портфолио недвижимости</Title>
            <Tabs tabs={tabs} activeValue={activeValue} setActive={setActiveValue}/>
            <div className={s.homeList}>
                {homeObjects.map(home => <HomeItem item={home}/>)}
            </div>
        </div>
    );
};

