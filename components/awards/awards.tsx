import React from 'react';
import {Title} from "../title/title";
import s from './awards.module.scss'
import {EffectCoverflow, Navigation} from 'swiper/modules';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import awardsImg1 from '../../assets/images/awards1.jpg'
import awardsImg2 from '../../assets/images/awards2.jpg'
import awardsImg3 from '../../assets/images/awards3.jpg'
import awardsImg4 from '../../assets/images/awards4.jpg'
import awardsImg5 from '../../assets/images/awards5.jpg'
import awardsImg6 from '../../assets/images/awards6.jpg'
import awardsImg7 from '../../assets/images/awards7.jpg'
import awardsImg8 from '../../assets/images/awards8.jpg'
import awardsImg9 from '../../assets/images/awards9.jpg'
import awardsImg10 from '../../assets/images/awards10.jpg'
import awardsImg11 from '../../assets/images/awards11.jpg'
import awardsImg12 from '../../assets/images/awards12.jpg'
import awardsImg13 from '../../assets/images/awards13.jpg'
import awardsImg14 from '../../assets/images/awards14.jpg'
import awardsImg15 from '../../assets/images/awards15.jpg'
import awardsImg16 from '../../assets/images/awards16.jpg'
import awardsImg17 from '../../assets/images/awards17.jpg'
import awardsImg18 from '../../assets/images/awards18.jpg'
import awardsImg19 from '../../assets/images/awards19.jpg'
import awardsImg20 from '../../assets/images/awards20.jpg'
import {Swiper, SwiperSlide} from 'swiper/react';

const images = [
    {id: 1, img: awardsImg1},
    {id: 2, img: awardsImg2},
    {id: 3, img: awardsImg3},
    {id: 4, img: awardsImg4},
    {id: 5, img: awardsImg5},
    {id: 6, img: awardsImg6},
    {id: 7, img: awardsImg7},
    {id: 8, img: awardsImg8},
    {id: 9, img: awardsImg9},
    {id: 10, img: awardsImg10},
    {id: 11, img: awardsImg11},
    {id: 12, img: awardsImg12},
    {id: 13, img: awardsImg13},
    {id: 14, img: awardsImg14},
    {id: 15, img: awardsImg15},
    {id: 16, img: awardsImg16},
    {id: 17, img: awardsImg17},
    {id: 18, img: awardsImg18},
    {id: 19, img: awardsImg19},
    {id: 20, img: awardsImg20},
]

export const Awards = () => {
    return (
        <div className={s.wrapper}>
            <Title className={s.title}>Наши награды</Title>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                }}
                navigation={true}
                modules={[EffectCoverflow, Navigation]}
                className={s.swiper}
            >
                {images.map(({img, id}) => <SwiperSlide style={{width: 330, height: 500}} key={id}>
                    <Image src={img} width={330} height={500} objectFit={'cover'}/>
                </SwiperSlide>)}
            </Swiper>
        </div>
    );
};
