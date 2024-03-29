import React from 'react';
import s from './description.module.scss'
import {DescriptionItem} from "./descriptionItem";
import image1 from '../../../assets/images/desc1.jpg'
import image2 from '../../../assets/images/desc2.jpg'

export const Description = () => {
    return (
        <div className={s.wrapper}>
            <DescriptionItem img={image1}>
                <span className={s.span}>ООО «ГеоСтрой» –</span> надёжный застройщик в Республике Башкортостан,
                воплощающий мечты в качественных
                жилищных решениях. Наш путь начался в 2011 году, как проектная организация, и с тех пор мы посвятили
                себя строительству жилых домов и социальных объектов. За это время мы реализовали более 35 проектов,
                включая детские сады, школы и медицинские учреждения, оставляя яркий след в облике нашего региона.
            </DescriptionItem>
            <DescriptionItem img={image2} align={'reverse'} btn={true}>
                Специализируясь на создании уютных и функциональных пространств, мы с гордостью отмечаем наши
                достижения. В рамках Республиканской программы «100 объектов —
                к 100-летию Башкортостана», мы сдали 9 социальных объектов в Бураевском, Калтасинском, Балтачевском и
                Кигинском районах. Это детские сады и школы, созданные с заботой о будущем наших детей.
            </DescriptionItem>
        </div>
    );
};
