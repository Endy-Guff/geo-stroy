import React from 'react';
import {ContainerLayout} from "../components/containerLayout/containerLayout";
import {HomeAbout} from "../components/home/homeAbout/homeAbout";
import {DescriptionItem} from "../components/home/description/descriptionItem";
import image1 from '../assets/images/desc1.jpg'
import image2 from '../assets/images/desc2.jpg'
import image3 from '../assets/images/desc3.jpg'
import image4 from '../assets/images/desc4.jpg'
import image5 from '../assets/images/desc5.jpg'
import {Footer} from "../components/footer/footer";
import {Awards} from "../components/awards/awards";

const About = () => {
    return (
        <ContainerLayout showNavigation={true}>
            <HomeAbout/>
            <DescriptionItem img={image1}>
                <span style={{fontSize: '32px', fontWeight: 400, display: 'block', marginBottom: '10px'}}>ООО «ГеоСтрой» –</span>
                надёжный застройщик в Республике Башкортостан, воплощающий мечты в качественных жилищных решениях. Наш
                путь начался в 2011 году, как проектная организация, и с тех пор мы посвятили себя строительству жилых
                домов и социальных объектов. За это время мы реализовали более 35 проектов, включая детские сады, школы
                и медицинские учреждения, оставляя яркий след в облике нашего региона.
            </DescriptionItem>
            <DescriptionItem img={image2} align={'reverse'}>
                Специализируясь на создании уютных и функциональных пространств, мы с гордостью отмечаем наши
                достижения. В рамках Республиканской программы «100 объектов —
                к 100-летию Башкортостана», мы сдали 9 социальных объектов в Бураевском, Калтасинском, Балтачевском и
                Кигинском районах. Это детские сады и школы, созданные с заботой о будущем наших детей.
            </DescriptionItem>
            <DescriptionItem img={image3}>
                Однако наши заботы не ограничиваются лишь построенными зданиями. Мы стремимся к совершенству и качеству
                в каждой детали. ООО «ГеоСтрой» обладает допусками для выполнения работ на особо опасных
                производственных объектах и гордимся нашими многогранными специалистами. Наша команда занимается
                земельными работами, монтажем бетонных и металлических конструкций, а также кровельными и монтажными
                работами.
            </DescriptionItem>
            <DescriptionItem img={image4} align={'reverse'}>
                Мы привержены ценности качества и прозрачности. Наши клиенты — сердце нашей деятельности. Мы изучаем их
                потребности, мотивации и боли, чтобы создавать жильё, которое действительно отражает их желания. Наши
                объекты отличаются удобствами и инновациями, отвечая запросам современной жизни. Каждая деталь, начиная
                от планировок и заканчивая выбором материалов, продумана, чтобы сделать вашу жизнь комфортной.
            </DescriptionItem>
            <DescriptionItem img={image5}>
                Ваше доверие вдохновляет нас стремиться к совершенству. Мы гордимся тем, что можем предложить вам не
                просто дом, а пространство, в котором создаются воспоминания и растёт будущее. Наша миссия — строить не
                просто здания, а ваш дом, где каждый момент — часть вашей истории.
                <span style={{fontSize: '32px', fontWeight: 400, display: 'block', marginTop: '10px', lineHeight: '32px'}}>Семейные ценности, Качество, ГеоСтрой — ваш надёжный путь к комфортной жизни</span>
            </DescriptionItem>
            <Awards/>
            <Footer/>
        </ContainerLayout>
    );
};

export default About