import React, {FC} from 'react';
import s from './Team.module.scss'
import {TeamType} from "./Team";
import Image from "next/image";

interface TeamItemProps {
    person: TeamType
}

export const TeamItem: FC<TeamItemProps> = ({person: {image, name, quote, position, experience}}) => {
    return (
        <div className={s.item}>
            <Image className={s.img} src={image} width={'250px'} height={250} sizes="(max-width: 250px) 100vw"/>
            <p className={s.name}>{name}</p>
            <p className={s.position}>Должность: {position}</p>
            <p className={s.experience}>Опыт: {experience}</p>
            <p className={s.quote}>{quote}</p>
        </div>
    );
};
