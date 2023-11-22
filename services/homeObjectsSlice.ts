import {createSlice} from "@reduxjs/toolkit";
import byTheCentenaryImg1 from '../assets/images/by-the-centenary-1.jpg'
import byTheCentenaryImg2 from '../assets/images/by-the-centenary-2.jpg'
import byTheCentenaryImg3 from '../assets/images/by-the-centenary-3.jpg'
import byTheCentenaryImg4 from '../assets/images/by-the-centenary-4.jpg'
import byTheCentenaryImg5 from '../assets/images/by-the-centenary-5.jpg'
import byTheCentenaryImg6 from '../assets/images/by-the-centenary-6.jpg'
import byTheCentenaryImg7 from '../assets/images/by-the-centenary-7.jpg'
import byTheCentenaryImg8 from '../assets/images/by-the-centenary-8.jpg'

import residentialEstateImg1 from '../assets/images/residential-estate-1.jpg'
import residentialEstateImg2 from '../assets/images/residential-estate-2.jpg'
import residentialEstateImg3 from '../assets/images/residential-estate-3.jpg'
import residentialEstateImg4 from '../assets/images/residential-estate-4.jpg'

import socialEstateImg1 from '../assets/images/social-estate-1.jpg'
import socialEstateImg2 from '../assets/images/social-estate2.jpg'
import socialEstateImg3 from '../assets/images/social-estate-3.jpg'
import socialEstateImg4 from '../assets/images/social-estate-4.jpg'
import socialEstateImg5 from '../assets/images/social-estate-5.jpg'
import socialEstateImg6 from '../assets/images/social-estate-6.jpg'
import socialEstateImg7 from '../assets/images/social-estate-7.jpg'
import socialEstateImg8 from '../assets/images/social-estate-8.jpg'
import socialEstateImg9 from '../assets/images/social-estate-9.jpg'
import socialEstateImg10 from '../assets/images/social-estate-10.jpg'
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
            image: byTheCentenaryImg5,
            name: 'Строительство детского сада на 95 мест',
            address: 'Бураевский район, с. Бураево'
        },
        {
            image: byTheCentenaryImg6,
            name: 'Школа на 108 ученических мест с детским садом на 90 мест',
            address: 'Караидельский район, с. Абызово'
        },
        {
            image: byTheCentenaryImg7,
            name: 'Школа на 80 ученических мест с детским садом на 40 мест',
            address: 'Кигинский район, с. Леуза'
        },
        {
            image: byTheCentenaryImg8,
            name: 'Строительство хирургического корпуса ЦГБ',
            address: 'Учалинский район, г. Учалы'
        }
    ],
    'residential-estate': [
        {
            image: residentialEstateImg1,
            name: 'Многоквартирный жилой дом',
            address: 'Белорецкий район, г. Белорецк ул.Точисского, д.20'
        },
        {image: residentialEstateImg2, name: 'Многоквартирный жилой дом', address: 'г. Туймазы, Проспект Ленина д2В'},
        {image: residentialEstateImg3, name: 'Многоквартирный жилой дом', address: 'г. Туймазы, ул.Советская д.16'},
        {image: residentialEstateImg4, name: 'Многоквартирный жилой дом', address: 'г. Нефтекамск,  д.26'}
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
            image: byTheCentenaryImg5,
            name: 'Строительство детского сада на 95 мест',
            address: 'Бураевский район, с. Бураево'
        },
        {
            image: byTheCentenaryImg6,
            name: 'Школа на 108 ученических мест с детским садом на 90 мест',
            address: 'Караидельский район, с. Абызово'
        },
        {
            image: byTheCentenaryImg7,
            name: 'Школа на 80 ученических мест с детским садом на 40 мест',
            address: 'Кигинский район, с. Леуза'
        },
        {
            image: socialEstateImg1,
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
            image: socialEstateImg4,
            name: 'Физкультурно-оздоровительный комплекс',
            address: 'Белорецкий район, с. Железнодорожный ул. Профсоюзная 2Б '
        },
        {
            image: socialEstateImg5,
            name: 'Физкультурно-оздоровительный комплекс',
            address: 'с. Бураево  ул. Уральская д. 48 к.2'
        },
        {
            image: socialEstateImg6,
            name: 'Детский сад на 120 мест',
            address: 'Калтасинский район, с. Калтасы ул. Карла Маркса 66В '
        },
        {
            image: socialEstateImg7,
            name: 'Детский сад на 220 мест',
            address: 'г. Нефтекамск ул. Ленина 47 '
        },
        {
            image: socialEstateImg8,
            name: 'СОШ №2',
            address: 'с. Краснохолмский ул. Тимирая 10'
        },
        {
            image: socialEstateImg9,
            name: 'Школа на 80 ученических мест с детским садом на 40 мест',
            address: 'Салаватский район с. Лаклы'
        },
        {
            image: socialEstateImg10,
            name: 'Школа на 60 ученических мест с детским садом на 25 мест',
            address: 'Караидельский район с. Новомуллакаево'
        },
    ]
}

export const homeObjectsSlice = createSlice({
    name: 'homeObjectsSlice',
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
    image: StaticImageData,
    name: string,
    address: string
}

export const homeObjectsReducer = homeObjectsSlice.reducer