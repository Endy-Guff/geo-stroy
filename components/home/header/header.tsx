import s from './header.module.scss'
import Image from "next/image";
import image1 from '../../../assets/images/header1.png'
import image2 from '../../../assets/images/header2.png'
import image3 from '../../../assets/images/header3.png'
import {AnimatePresence, motion} from 'framer-motion';
import {useEffect, useState} from "react";

export const Header = () => {
    const [animatedContent, setAnimatedContent] = useState(0)
    const contents = ['ЖК «Октябрьский»', 'ЖК «Победа»']
    useEffect(() => {
        let intrevalId: number
        intrevalId = window.setInterval(() => {
            setAnimatedContent(state => state === 0 ? 1 : 0)
        }, 5000)
        return () => {
            clearInterval(intrevalId)
        }
    })

    return (
        <div className={s.wrapper}>
            <div className={s.inner}>
                <div className={s.titleBlock}>
                    <h2 className={s.title}>Выбирайте Качество:</h2>
                    <h2 className={s.title2}>Доверьте Своё Будущее</h2>
                    <h1 className={s.subtitle}>ГеоСтрой</h1>
                </div>
                <div className={s.img1}>
                    <Image src={image1}/>

                </div>
                <div className={s.img2}>
                    <Image src={image2}/>
                </div>
                <div
                    className={s.card}
                >
                    <AnimatePresence mode='wait'>
                        {animatedContent && <motion.h5 className={s.cardTitle}
                                                       key={0}
                                                       initial={{opacity: 0}}
                                                       animate={{opacity: 1}}
                                                       exit={{opacity: 0}}
                                                       transition={{duration: 0.5}}
                        >
                            {contents[animatedContent]}
                        </motion.h5>}
                        {!animatedContent && <motion.h5 className={s.cardTitle}
                                                        key={1}
                                                        initial={{opacity: 0}}
                                                        animate={{opacity: 1}}
                                                        exit={{opacity: 0}}
                                                        transition={{duration: 0.5}}
                        >
                            {contents[animatedContent]}
                        </motion.h5>}
                        {animatedContent && <motion.p className={s.cardText}
                                                      key={2}
                                                      initial={{opacity: 0}}
                                                      animate={{opacity: 1}}
                                                      exit={{opacity: 0}}
                                                      transition={{duration: 0.5}}
                        >
                          Первый дом комфорт-класса в г. Учалы по ул. 65 лет Победы
                          Лучшие предложения от застройщика!
                        </motion.p>}
                        {!animatedContent && <motion.p className={s.cardText}
                                                       key={3}
                                                       initial={{opacity: 0}}
                                                       animate={{opacity: 1}}
                                                       exit={{opacity: 0}}
                                                       transition={{duration: 0.5}}
                        >
                          Качество от проверенного застройщика
                          Дом комфорт-класса в г. Белорецк по ул. Овчаренко
                        </motion.p>}
                    </AnimatePresence>

                    <button className={s.btn}>Выбрать квартиру</button>
                </div>
                <div className={s.img3}>
                    <Image src={image3}/>
                </div>
            </div>
        </div>
    );
};
