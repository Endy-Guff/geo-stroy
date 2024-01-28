import React from 'react';
import s from './homeAbout.module.scss'
import {Title} from "../../title/title";
import aboutIcon from '../../../assets/images/aboutIcon.svg'
import Image from "next/image";

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
            {/*<div className={s.items}>*/}
            {/*    {items.map(({count, text}) => <HomeAboutItem count={count} text={text}/>)}*/}
            {/*</div>*/}

            <div className={s.content}>
                <div className={`${s.item} ${s.item_1}`}>
                    <span className={s.number}>12+</span>
                    <span className={s.text}>лет в сфере строительства</span>
                </div>
                <div className={`${s.item} ${s.item_2}`}>
                    <span className={s.number}>88 000+</span>
                    <span className={s.text}>кв. метров объектов социального назначения</span>
                </div>
                <div className={`${s.item} ${s.item_3}`}>
                    <div className={s.aboutIcon}>
                        <Image src={aboutIcon}/>
                    </div>
                    <span className={s.number}>50+</span>
                    <span className={s.text}>реализованных проектов</span>
                </div>
                <div className={`${s.item} ${s.item_4}`}>
                    <span className={s.number}>1 600+</span>
                    <span className={s.text}>счастливых жителей</span>
                </div>
                <div className={`${s.item} ${s.item_5}`}>
                    <span className={s.number}>90 000+</span>
                    <span className={s.text}>кв. метров жилой недвижимости</span>
                </div>
            </div>
        </div>
    );
};
