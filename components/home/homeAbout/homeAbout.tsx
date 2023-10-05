import React from 'react';
import s from './homeAbout.module.scss'
import {HomeAboutItem} from "./homeAboutItem";
import {Title} from "../../title/title";

const items = [
    {id: 1, count: '50+', text: 'реализованных проектов'},
    {id: 2, count: '12+', text: 'лет в сфере строительства'},
    {id: 3, count: '500+', text: 'сотрудников'},
    {id: 4, count: '10 000+', text: 'счастлиых жителей'},
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
