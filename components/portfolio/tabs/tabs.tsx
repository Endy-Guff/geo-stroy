import React, {FC} from 'react';
import {HomeObjectsSliceInitialStateKeyType} from "../../../services/homeObjectsPortfolioSlice";
import s from '../homeObject.module.scss'
import {Tab} from "./tab";

interface TabsProps {
    activeValue: string
    setActive: (value: string) => void
    tabs: ITabsOption[]
}

export interface ITabsOption {
    id: number
    value: string
    label: string
}

export const Tabs: FC<TabsProps> = ({setActive, activeValue, tabs}) => {
    return (
        <div className={s.tabList}>
            {tabs.map(({id, value, label}) => <Tab isActive={activeValue === value}
                                                   onChange={() => setActive(value)}>{label}</Tab>)}

        </div>
    );
};

