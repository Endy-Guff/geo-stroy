import React from 'react';
import s from './Team.module.scss'
import img from '../../assets/images/team1.jpg'
import {Title} from "../title/title";
import {TeamItem} from "./TeamItem";
import {StaticImageData} from "next/image";

export interface TeamType {
    id: number
    image: StaticImageData,
    name: string,
    position: string,
    experience: string,
    quote: string,
}

const team = [
    {
        id: 1,
        image: img,
        name: 'Иванов Пётр Александрович',
        position: 'Генеральный директор',
        experience: 'Свыше 20 лет в строительной отрасли',
        quote: '«Мы строим не просто дома, мы создаём будущее»'
    },
    {
        id: 2,
        image: img,
        name: 'Иванов Пётр Александрович',
        position: 'Генеральный директор',
        experience: 'Свыше 20 лет в строительной отрасли',
        quote: '«Мы строим не просто дома, мы создаём будущее»'
    },
    {
        id: 3,
        image: img,
        name: 'Иванов Пётр Александрович',
        position: 'Генеральный директор',
        experience: 'Свыше 20 лет в строительной отрасли',
        quote: '«Мы строим не просто дома, мы создаём будущее»'
    },
    {
        id: 4,
        image: img,
        name: 'Иванов Пётр Александрович',
        position: 'Генеральный директор',
        experience: 'Свыше 20 лет в строительной отрасли',
        quote: '«Мы строим не просто дома, мы создаём будущее»'
    }
]

export const Team = () => {
    return (
        <div className={s.wrapper}>
            <Title className={s.title}>Наша команда</Title>
            <div className={s.inner}>
                {team.map(person => <TeamItem key={person.id} person={person}/>)}
            </div>
        </div>
    );
};
