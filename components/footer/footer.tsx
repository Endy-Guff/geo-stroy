import React from 'react';
import s from './footer.module.scss'
import {Title} from "../title/title";
import Image from "next/image";
import image from '../../assets/images/footerMap.jpg'

export const Footer = () => {
    return (
        <footer className={s.wrapper}>
                <Title className={s.title}>Контакты</Title>
            <div className={s.inner}>
                <div className={s.content}>
                    <div className={s.item}>
                        <h5 className={s.subtitle}>Офис “ГеоСтрой” г.Уфа</h5>
                        <p className={s.text}>ул. Авроры, д. 6 к. 1, офис 8</p>
                        <p className={s.text}><a href="tel:+79999876543">+7 (999) 987-65-43</a></p>
                        <p className={s.text}><a href="mailto:+79999876543">geostroy@mail.ru</a></p>
                    </div>
                    <div className={s.item}>
                        <h5 className={s.subtitle}>Офис “ГеоСтрой” г. Белорецк</h5>
                        <p className={s.text}>ул. Авроры, д. 6 к. 1, офис 8</p>
                        <p className={s.text}><a href="tel:+79999876543">+7 (999) 987-65-43</a></p>
                        <p className={s.text}><a href="mailto:+79999876543">geostroy@mail.ru</a></p>
                    </div>
                </div>
                <Image className={s.img} src={image}/>
            </div>
        </footer>
    );
};
