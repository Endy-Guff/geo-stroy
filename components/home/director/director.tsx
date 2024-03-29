import React from 'react';
import s from './director.module.scss'
import Image from "next/image";
import directorPhoto from '../../../assets/images/director.jpg'

export const Director = () => {
    return (
        <div className={s.wrapper}>
            <Image className={s.img} src={directorPhoto} alt={"фото директора"} objectFit={'cover'}/>
            <div className={s.content}>
                <h5 className={s.name}>Хажиев Рустам Дарикович</h5>
                <span className={s.desc}>Руководитель группы компаний «ГеоСтрой»</span>
                <h6 className={s.subtitle}>Дорогие друзья и уважаемые посетители нашего сайта,</h6>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        С радостью приветствую вас от имени компании «ГеоСтрой». Мы гордимся возможностью представить
                        вам
                        наши проекты и услуги.
                    </p>
                    <p className={s.text}>
                        Более двенадцати лет мы уделяем особое внимание качеству и надёжности в строительстве. Наша
                        команда
                        специалистов горит идеей создания надёжных и устойчивых объектов, которые не только служат нашим
                        клиентам, но и вносят свой вклад в развитие региона и страны.
                    </p>
                    <p className={s.text}>
                        Мы стремимся к инновациям, строим наше будущее на основе опыта прошлого и всегда готовы к новым
                        вызовам. Наша цель — делать мир вокруг нас лучше и безопаснее.
                    </p>
                    <p className={s.text}>
                        Благодарим вас за интерес к нашей компании. Мы надеемся, что информация на нашем сайте будет
                        полезной для вас. Если у вас есть какие‑либо вопросы или требуется дополнительная информация, не
                        стесняйтесь связаться с нами.
                    </p>
                    <p className={s.text}>
                        С уважением,<br/>
                        Рустам Дарикович
                    </p>
                </div>
            </div>
        </div>
    );
};
