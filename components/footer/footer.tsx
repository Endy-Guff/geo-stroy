import React from 'react';
import s from './footer.module.scss'
import {Title} from "../title/title";
import Image from "next/image";
import image from '../../assets/images/footerMap.jpg'

export const Footer = () => {
    return (
        <footer className={s.wrapper} id={'contacts'}>
            <Title className={s.title}>Контакты</Title>
            <div className={s.inner}>
                <div className={s.content}>
                    <div className={s.content1}>
                        <div className={s.item}>
                            <h5 className={s.subtitle}>Офис “ГеоСтрой” г.Уфа (Главный офис)</h5>
                            <p className={s.text}>ул. Самаркандская, 1/4</p>
                            <p className={s.text}><a href="tel:+79999876543">+7 (999) 987-65-43</a></p>
                            <p className={s.text}><a href="mailto:+79999876543">geostroy@mail.ru</a></p>
                        </div>
                        <div className={s.item}>
                            <h5 className={s.subtitle}>г. Белорецк</h5>
                            <p className={s.text}>ул. Карла Маркса, д.52</p>
                        </div>
                        <div className={s.item}>
                            <h5 className={s.subtitle}>г. Туймазы</h5>
                            <p className={s.text}>ул. Островского, д. 44 б</p>
                        </div>
                    </div>
                    <div className={s.content2}>
                        <div className={s.item}>
                            <h5 className={s.subtitle}>г. Янаул</h5>
                            <p className={s.text}>ул. Южная, д. 2</p>
                        </div>
                        <div className={s.item}>
                            <h5 className={`${s.subtitle} ${s.subtitle_nowrap}`}>г. Нефтекамск</h5>
                            <p className={s.text}>ул. Городская, 8Б</p>
                        </div>
                        <div className={s.item}>
                            <h5 className={s.subtitle}>г. Учалы</h5>
                            <p className={s.text}>ул. Ленина, д. 25а, офис 2</p>
                        </div>
                    </div>
                </div>
                <Image className={s.img} src={image} width={560} height={420} style={{objectFit: 'cover'}}/>
            </div>
        </footer>
    );
};
