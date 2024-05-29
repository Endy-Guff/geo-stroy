import {createSlice} from "@reduxjs/toolkit";
import byTheCentenaryImg1 from '../assets/images/by-the-centenary-1.jpg'
import byTheCentenaryImg2 from '../assets/images/by-the-centenary-2.jpg'
import byTheCentenaryImg3 from '../assets/images/by-the-centenary-3.jpg'
import byTheCentenaryImg4 from '../assets/images/by-the-centenary-4.jpg'
import byTheCentenaryImg5 from '../assets/images/by-the-centenary-5.jpg'
import byTheCentenaryImg5_1 from '../assets/images/by-the-centenary-5_1.jpeg'
import byTheCentenaryImg6 from '../assets/images/by-the-centenary-6.jpg'
import byTheCentenaryImg7 from '../assets/images/by-the-centenary-7.jpg'
import byTheCentenaryImg7_1 from '../assets/images/by-the-centenary-7_1.jpeg'

import residentialEstateImg1 from '../assets/images/residential-estate-1.jpg'
import residentialEstateImg2 from '../assets/images/residential-estate-2.jpg'
import residentialEstateImg2_1 from '../assets/images/residential-estate-2_1.jpeg'
import residentialEstateImg3 from '../assets/images/residential-estate-3.jpg'
import residentialEstateImg4 from '../assets/images/residential-estate-4.jpg'
import residentialEstateImg4_1 from '../assets/images/residential-estate-4_1.jpeg'
import residentialEstateImg5 from '../assets/images/residential-estate-5.jpg'
import residentialEstateImg6 from '../assets/images/residential-estate-6.jpg'
import residentialEstateImg6_1 from '../assets/images/residential-estate-6_1.jpeg'
import residentialEstateImg7 from '../assets/images/residential-estate-7.jpg'
import residentialEstateImg7_1 from '../assets/images/residential-estate-7_1.jpeg'
import residentialEstateImg8 from '../assets/images/residential-estate-8.jpg'
import residentialEstateImg9 from '../assets/images/residential-estate-9.jpg'
import residentialEstateImg10 from '../assets/images/residential-estate-10.jpg'
import residentialEstateImg11 from '../assets/images/residential-estate-11.jpg'

import socialEstateImg1 from '../assets/images/social-estate-1.jpg'
import socialEstateImg1_1 from '../assets/images/social-estate1_1.jpeg'
import socialEstateImg2 from '../assets/images/social-estate2.jpg'
import socialEstateImg3 from '../assets/images/social-estate-3.jpg'
import socialEstateImg4 from '../assets/images/social-estate-4.jpg'
import socialEstateImg4_1 from '../assets/images/social-estate4_1.jpeg'
import socialEstateImg5 from '../assets/images/social-estate-5.jpg'
import socialEstateImg6 from '../assets/images/social-estate-6.jpg'
import socialEstateImg6_1 from '../assets/images/social-estate6_1.jpeg'
import socialEstateImg7 from '../assets/images/social-estate-7.jpg'
import socialEstateImg7_1 from '../assets/images/social-estate7_1.jpeg'
import socialEstateImg8 from '../assets/images/social-estate-8.jpg'
import socialEstateImg8_1 from '../assets/images/social-estate8_1.jpeg'
import socialEstateImg9 from '../assets/images/social-estate-9.jpg'
import socialEstateImg9_1 from '../assets/images/social-estate9_1.jpeg'
import socialEstateImg10 from '../assets/images/social-estate-10.jpg'
import socialEstateImg10_1 from '../assets/images/social-estate10_1.jpeg'
import socialEstateImg11 from '../assets/images/social-estate-11.jpg'
import socialEstateImg12 from '../assets/images/social-estate-12.jpg'
import {StaticImageData} from "next/image";

const initialState: HomeObjectsSliceInitialStateType = {
    'by-the-centenary': [
        {
            image: byTheCentenaryImg1,
            name: 'Строительство детского сада на 140 мест',
            address: 'Белорецкий район, с. Инзер'
        },
        {
            image: byTheCentenaryImg2,
            name: 'Школа на 80 ученических мест с детским садом на 40 мест',
            address: 'Балтачевский район, д. Штанды'
        },
        {
            image: byTheCentenaryImg3,
            name: 'Строительство детского сада на 140 мест',
            address: 'Белорецкий район, с. Абзаково'
        },
        {
            image: byTheCentenaryImg4,
            name: 'Строительство школы на 320 мест',
            address: 'Благовещенский район, г. Благовещенск, 02 микрорайон'
        },
        {
            image: [byTheCentenaryImg5, byTheCentenaryImg5_1],
            name: 'Строительство детского сада на 95 мест',
            address: 'Бураевский район, с. Бураево'
        },
        {
            image: byTheCentenaryImg6,
            name: 'Школа на 108 ученических мест с детским садом на 90 мест',
            address: 'Караидельский район, с. Абызово'
        },
        {
            image: [byTheCentenaryImg7, byTheCentenaryImg7_1],
            name: 'Школа на 80 ученических мест с детским садом на 40 мест',
            address: 'Кигинский район, с. Леуза'
        },
    ],
    'residential-estate': [
        {
            image: residentialEstateImg1,
            name: 'Многоквартирный жилой дом',
            address: 'Белорецкий район, г. Белорецк ул.Точисского, д.20'
        },
        {
            image: [residentialEstateImg2, residentialEstateImg2_1],
            name: 'Многоквартирный жилой дом',
            address: 'г. Туймазы, Проспект Ленина д2В'
        },
        {image: residentialEstateImg3, name: 'Многоквартирный жилой дом', address: 'г. Туймазы, ул.Советская д.16'},
        {
            image: [residentialEstateImg4, residentialEstateImg4_1],
            name: 'Многоквартирный жилой дом',
            address: 'г. Нефтекамск,  д.26'
        },
        {
            image: residentialEstateImg5,
            name: 'Многоквартирный жилой дом',
            address: 'г. Нефтекамск, ул. Городская  д. 32'
        },
        {
            image: [residentialEstateImg6, residentialEstateImg6_1],
            name: 'Многоквартирный жилой дом',
            address: 'г. Нефтекамск, ул. Городская д. 29'
        },
        {
            image: [residentialEstateImg7, residentialEstateImg7_1],
            name: 'Многоквартирный жилой дом',
            address: ' с. Бураево ул.Вострецова 24'
        },
        {
            image: residentialEstateImg8,
            name: 'Многоквартирный жилой дом',
            address: 'с. Калтасы, ул. Кооперативная д. 26'
        },
        {
            image: residentialEstateImg9,
            name: 'Многоквартирный жилой дом',
            address: 'Калтасинский район, с. Краснохолмский, ул.Комсомольская , д.4 и д.6'
        },
        {image: residentialEstateImg10, name: 'Многоквартирный жилой дом', address: 'Янаул'},
        {image: residentialEstateImg11, name: 'Многоквартирный жилой дом', address: 'Янаул, мкрн. Южный'}
    ],
    'social-estate': [
        {
            image: byTheCentenaryImg1,
            name: 'Строительство детского сада на 140 мест',
            address: 'Белорецкий район, с. Инзер'
        },
        {
            image: byTheCentenaryImg2,
            name: 'Школа на 80 ученических мест с детским садом на 40 мест',
            address: 'Балтачевский район, д. Штанды'
        },
        {
            image: byTheCentenaryImg3,
            name: 'Строительство детского сада на 140 мест',
            address: 'Белорецкий район, с. Абзаково'
        },
        {
            image: byTheCentenaryImg4,
            name: 'Строительство школы на 320 мест',
            address: 'Благовещенский район, г. Благовещенск, 02 микрорайон'
        },
        {
            image: [byTheCentenaryImg5, byTheCentenaryImg5_1],
            name: 'Строительство детского сада на 95 мест',
            address: 'Бураевский район, с. Бураево'
        },
        {
            image: byTheCentenaryImg6,
            name: 'Школа на 108 ученических мест с детским садом на 90 мест',
            address: 'Караидельский район, с. Абызово'
        },
        {
            image: [byTheCentenaryImg7, byTheCentenaryImg7_1],
            name: 'Школа на 80 ученических мест с детским садом на 40 мест',
            address: 'Кигинский район, с. Леуза'
        },
        {
            image: [socialEstateImg1, socialEstateImg1_1],
            name: 'Кап.ремонт МАОУ Гимназии №17',
            address: 'г. Белорецк, Кирова 40'
        },
        {
            image: socialEstateImg2,
            name: 'Поликлиника на 300 посещений',
            address: 'г.Баймак ул. Мира 4А'
        },
        {
            image: socialEstateImg3,
            name: 'Реконструкция  школы №1',
            address: 'Белорецкий район, г. Белорецк ул. Карла Маркса 82 '
        },
        {
            image: [socialEstateImg4, socialEstateImg4_1],
            name: 'Физкультурно-оздоровительный комплекс',
            address: 'Белорецкий район, с. Железнодорожный ул. Профсоюзная 2Б '
        },
        {
            image: socialEstateImg5,
            name: 'Физкультурно-оздоровительный комплекс',
            address: 'с. Бураево  ул. Уральская д. 48 к.2'
        },
        {
            image: [socialEstateImg6, socialEstateImg6_1],
            name: 'Детский сад на 120 мест',
            address: 'Калтасинский район, с. Калтасы ул. Карла Маркса 66В '
        },
        {
            image: [socialEstateImg7, socialEstateImg7_1],
            name: 'Детский сад на 220 мест',
            address: 'г. Нефтекамск ул. Ленина 47 '
        },
        {
            image: [socialEstateImg8, socialEstateImg8_1],
            name: 'СОШ №2',
            address: 'с. Краснохолмский ул. Тимирая 10'
        },
        {
            image: [socialEstateImg9, socialEstateImg9_1],
            name: 'Школа на 80 ученических мест с детским садом на 40 мест',
            address: 'Салаватский район с. Лаклы'
        },
        {
            image: [socialEstateImg10, socialEstateImg10_1],
            name: 'Школа на 60 ученических мест с детским садом на 25 мест',
            address: 'Караидельский район с. Новомуллакаево'
        },
        {
            image: socialEstateImg11,
            name: 'Комплексная застройка и благоустройство квартала Италмаз ',
            address: 'Янаульский район, с. Шудек'
        },
        {
            image: socialEstateImg12,
            name: 'Детский сад на 220 мест ',
            address: 'г. Нефтекамск мкрн №25, пр.Комсомольский ,д.41Г'
        },
    ]
}

export const homeObjectsPortfolioSlice = createSlice({
    name: 'homeObjectsPortfolioSlice',
    initialState,
    reducers: {}
})

export type HomeObjectsSliceInitialStateType =
    {
        [key in HomeObjectsSliceInitialStateKeyType]
        :
        PortfolioHomeObjectType[]
    }

export type HomeObjectsSliceInitialStateKeyType = 'social-estate' | 'residential-estate' | 'by-the-centenary'

export interface PortfolioHomeObjectType {
    image: StaticImageData | StaticImageData[],
    name: string,
    address: string
}

export const homeObjectsPortfolioReducer = homeObjectsPortfolioSlice.reducer