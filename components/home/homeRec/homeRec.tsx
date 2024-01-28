import React from 'react';
import s from './homeRec.module.scss'
import {Title} from "../../title/title";
import {ButtonWithArrow} from "../../buttonWithArrow/buttonWithArrow";
import Image from "next/image";
import image from '../../../assets/images/recImg.jpg'
import Link from "next/link";

export const HomeRec = () => {
    return (
        <div className={s.wrapper}>
            <Title className={s.title}>Полезное</Title>
            <div className={s.content}>
                <div className={s.textBox}>
                    <p className={s.text}>
                        В этом разделе мы публикуем актуальную информацию для наших покупателей, чтобы вы были в курсе
                        новостей и событий на рынке недвижимости.
                    </p>
                    <Link href={'/advice'}>
                        <ButtonWithArrow>Читать подробнее</ButtonWithArrow>
                    </Link>
                </div>
                <Image className={s.img} src={image} objectFit={'cover'}/>
            </div>
        </div>
    );
};
