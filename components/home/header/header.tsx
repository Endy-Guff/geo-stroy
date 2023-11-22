import s from './header.module.scss'
import Image from "next/image";
import image1 from '../../../assets/images/header1.png'
import image2 from '../../../assets/images/header2.png'
import image3 from '../../../assets/images/header3.png'

export const Header = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.inner}>
                <div className={s.titleBlock}>
                    <h2 className={s.title}>Многоквартирные жилые проекты:</h2>
                    <h2 className={s.title2}>комфорт, стиль, качество</h2>
                    <h1 className={s.subtitle}>ГеоСтрой</h1>
                </div>
                <div className={s.img1}>
                    <Image src={image1}/>
                </div>
                <div className={s.img2}>
                    <Image src={image2}/>
                </div>
                <div className={s.card}>
                    <h5 className={s.cardTitle}>
                        ЖК «Победа»
                    </h5>
                    <p className={s.cardText}>
                        Первый дом комфорт-класса в г. Учалы по ул. 65 лет Победы
                        Лучшие предложения от застройщика!
                    </p>
                    <button className={s.btn}>Выбрать квартиру</button>
                </div>
                <div className={s.img3}>
                    <Image src={image3}/>
                </div>
            </div>
        </div>
    );
};
