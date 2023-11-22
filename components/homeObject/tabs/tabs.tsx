import React, {FC} from 'react';
import {HomeObjectsSliceInitialStateKeyType} from "../../../services/homeObjectsSlice";
import s from '../homeObject.module.scss'
import {Tab} from "./tab";

interface TabsProps {
    activeValue: HomeObjectsSliceInitialStateKeyType
    setActive: (value: HomeObjectsSliceInitialStateKeyType) => void
}

export const Tabs: FC<TabsProps> = ({setActive, activeValue}) => {
    return (
        <div className={s.tabList}>
            <Tab isActive={activeValue === 'by-the-centenary'} onChange={() => setActive('by-the-centenary')}>Объекты к
                100-летию Республики Башкортостан</Tab>
            <Tab isActive={activeValue === 'residential-estate'} onChange={() => setActive('residential-estate')}>Жилые
                дома</Tab>
            <Tab isActive={activeValue === 'social-estate'} onChange={() => setActive('social-estate')}>Социальная
                недвижимость</Tab>
        </div>
    );
};

