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
            <Title className={s.title}>Советы риэлтора</Title>
            <div className={s.content}>
                <div className={s.textBox}>
                    <p className={s.text}>
                        Здесь мы делимся ценными советами от нашего риэлтора. Мы знаем, что выбор и оформление
                        недвижимости - это важные шаги, и мы готовы помочь вам на каждом этапе. Наш риэлтор -
                        профессионал, чья цель - сделать процесс приобретения или аренды жилья максимально комфортным и
                        прозрачным.
                        <br/>
                        <br/>
                        Мы верим в силу информированного выбора, поэтому здесь вы найдете советы и рекомендации, которые
                        помогут вам сориентироваться в мире недвижимости.
                        <br/>
                        <br/>
                        Мы гордимся тем, что помогаем нашим клиентам, и мы всегда здесь, чтобы поделиться знаниями и
                        опытом. Ваши интересы - наш приоритет, и мы стремимся сделать процесс выбора и оформления жилья
                        легким и приятным. Доверьтесь нам, и вместе мы сделаем правильный выбор!
                    </p>
                    <Link href={'/advice'}>
                        <ButtonWithArrow>Читать подробнее</ButtonWithArrow>
                    </Link>
                </div>
                <Image src={image}/>
            </div>
        </div>
    );
};
