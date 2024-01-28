import React, {useState} from 'react';
import {HomeObjectsSliceInitialStateKeyType, PortfolioHomeObjectType} from "../../services/homeObjectsPortfolioSlice";
import {useAppSelector} from "../../services/store";
import {Title} from "../title/title";
import s from "../portfolio/homeObject.module.scss";
import {ITabsOption, Tabs} from "../portfolio/tabs/tabs";
import {HomeObjectsItem} from "../home/homeObjects/homeObjectsItem";

const tabs: ITabsOption[] = [
    {id: 1, label: 'г. Учалы', value: 'учалы'},
    {id: 2, label: 'г. Белорецк', value: 'белорецк'},
    {id: 3, label: 'г. Уфа', value: 'уфа'},
]

export const CurrentOffersPage = () => {
    const [activeValue, setActiveValue] = useState<string>('учалы')
    const complexes = useAppSelector(state => state.complexesSlice)

    const mappedComplexes = complexes.map((complex) => complex.houses).flat().filter(house => {
        const regex = new RegExp(activeValue);
        return regex.test(house.address.toLowerCase());

    }).map((house, i) =>
        <HomeObjectsItem key={house.id} house={house}/>
    )

    return (
        <div>
            <Title className={s.title}>Актуальные предложения</Title>
            <Tabs tabs={tabs} activeValue={activeValue} setActive={setActiveValue}/>
            <div className={s.homeList}>
                {mappedComplexes}
            </div>
        </div>
    );
};

