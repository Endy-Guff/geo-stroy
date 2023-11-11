import React from 'react';
import s from './homeAbout.module.scss'
import {HomeAboutItem} from "./homeAboutItem";
import {Title} from "../../title/title";

const items = [
    {id: 1, count: '50+', text: 'реализованных проектов'},
    {id: 2, count: '12+', text: 'лет в сфере строительства'},
    {id: 3, count: '88 000+', text: 'кв. метров объектов социального назначения'},
    {id: 4, count: '90 000+', text: 'кв. метров жилой недвижимости'},
    {id: 5, count: '1 600+', text: 'счастливых жителей'},
]

export const HomeAbout = () => {
    return (
        <div className={s.wrapper}>
            <Title className={s.title}>О нас</Title>
            <div className={s.items}>
                {items.map(({count, text}) => <HomeAboutItem count={count} text={text}/>)}
            </div>
        </div>
    );
};
