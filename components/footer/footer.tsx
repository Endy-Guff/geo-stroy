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
                            <p className={s.text}><a href="tel:+73472926141">+7(347) 292-61-41</a></p>
                            <p className={s.text}><a href="mailto:geostroi.smr@yandex.ru">geostroi.smr@yandex.ru</a></p>
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
                <div className={s.imgContainer}>
                    <Image className={s.img} src={image} width={560} height={420} objectFit={'cover'}/>
                </div>
            </div>
            <div className={s.subFooter} style={{marginTop: '140px'}}>
                <p style={{
                    fontSize: '24px',
                    textAlign: 'center',
                    lineHeight: '30px',
                    maxWidth: '900px',
                    margin: '0 auto',
                    fontWeight: '400',
                    marginBottom: '30px'
                }}>
                    Общество с ограниченной ответственностью «ГеоСтрой»
                    ИНН 0277114858
                    ОГРН 1110280009234
                    450105, Республика Башкортостан, г.Уфа, ул. Самаркандская, д.1/4, офис 205
                </p>
                <p
                    style={{
                        fontSize: '24px',
                        textAlign: 'center',
                        lineHeight: '30px',
                        maxWidth: '900px',
                        margin: '0 auto',
                        fontWeight: '600'
                    }}
                >Не является офертой</p>
            </div>
        </footer>
    );
};
