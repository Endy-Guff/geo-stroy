import {createSlice} from "@reduxjs/toolkit";
import region10_1 from '../assets/images/region10_1.jpg'
import region11_1 from '../assets/images/region11_1.jpg'
import region8_1 from '../assets/images/region8_1.jpg'
import region8_2 from '../assets/images/region7_2.jpg'
import region7_1 from '../assets/images/region7_1.jpg'
import region7_2 from '../assets/images/region7_2.jpg'
import region7_3 from '../assets/images/region7_3.jpg'
import region7_4 from '../assets/images/region7_4.jpg'
import region7_5 from '../assets/images/region7_5.jpg'
import region7_6 from '../assets/images/region7_6.jpg'
import region5_1 from '../assets/images/region5_1.jpg'
import region4_1 from '../assets/images/region4_1.jpg'
import region12_1 from '../assets/images/region12_1.jpg'
import region12_2 from '../assets/images/region12_2.jpg'
import region12_3 from '../assets/images/region12_3.jpg'
import region13_1 from '../assets/images/region13_1.jpg'
import region13_2 from '../assets/images/region13_2.jpg'
import region13_3 from '../assets/images/region13_3.jpg'
import region13_4 from '../assets/images/region13_4.jpg'
import region13_5 from '../assets/images/region13_5.jpg'
import region14_1 from '../assets/images/region14_1.jpg'
import region14_2 from '../assets/images/region14_2.jpg'
import region14_3 from '../assets/images/region14_3.jpg'
import region14_4 from '../assets/images/region14_4.jpg'
import region15_1 from '../assets/images/region15_1.jpg'
import region15_2 from '../assets/images/region15_2.jpg'
import region15_3 from '../assets/images/region15_3.jpg'
import region9_1 from '../assets/images/region9_1.jpg'
import region2_1 from '../assets/images/region2_1.jpg'
import region2_2 from '../assets/images/region2_2.jpg'
import {StaticImageData} from "next/image";

const initialState: MapElementInitialState = {
    ['2']: [
        {
            blockTitle: 'Караидельский район',
            image: region2_1,
            title: 'Школа на 108 ученических мест с детским садом на 90 мест',
            subtitle: 'Караидельский район, с. Абызово'
        },
        {
            blockTitle: 'Караидельский район',
            image: region2_2,
            title: 'Школа на 60 ученических мест с детским садом на 25 мест',
            subtitle: 'Караидельский район с. Новомуллакаево'
        },
    ],
    ['4']: [
        {
            blockTitle: 'Благовещенский район',
            image: region4_1,
            title: 'Строительство школы на 320 мест',
            subtitle: 'Благовещенский район, г. Благовещенск, 02 микрорайон'
        },
    ],
    ['5']: [
        {
            blockTitle: 'Кигинский район',
            image: region5_1,
            title: 'Школа на 80 ученических мест с детским садом на 40 мест',
            subtitle: 'Кигинский район, с. Леуза'
        },
    ],
    ['7']:
        [
            {
                blockTitle: 'Белорецкий район',
                image: region7_1,
                title: 'Строительство детского сада на 140 мест',
                subtitle: 'Белорецкий район, с. Инзер'
            },
            {
                blockTitle: 'Белорецкий район',
                image: region7_2,
                title: 'Строительство детского сада на 140 мест',
                subtitle: 'Белорецкий район, с. Абзаково'
            },
            {
                blockTitle: 'Белорецкий район',
                image: region7_3,
                title: 'Многоквартирный жилой дом',
                subtitle: 'Белорецкий район, г. Белорецк ул.Точисского, д.20'
            },
            {
                blockTitle: 'Белорецкий район',
                image: region7_4,
                title: 'Кап.ремонт МАОУ Гимназии №17',
                subtitle: 'г. Белорецк, Кирова 40'
            },
            {
                blockTitle: 'Белорецкий район',
                image: region7_5,
                title: 'Реконструкция  школы №1',
                subtitle: 'Белорецкий район, г. Белорецк ул. Карла Маркса 82 '
            },
            {
                blockTitle: 'Белорецкий район',
                image: region7_6,
                title: 'Физкультурно-оздоровительный комплекс',
                subtitle: 'Белорецкий район, с. Железнодорожный ул. Профсоюзная 2Б '
            },
        ],
    ['9']:
        [
            {
                blockTitle: 'Балтачевский район',
                image: region9_1,
                title: 'Школа на 80 ученических мест с детским садом на 40 мест',
                subtitle: 'Балтачевский район, д. Штанды'
            },
        ],
    ['8']:
        [
            {
                blockTitle: 'Туймазинский район',
                image: region8_1,
                title: 'Многоквартирный жилой дом',
                subtitle: 'г. Туймазы, Проспект Ленина д.2В'
            },
            {
                blockTitle: 'Туймазинский район',
                image: region8_2,
                title: 'Многоквартирный жилой дом',
                subtitle: 'г. Туймазы, ул.Советская д.16'
            }
        ],
    ['10']:
        [
            {
                blockTitle: 'Баймакский район',
                image: region10_1,
                title: 'Поликлиника на 300 посещений',
                subtitle: 'г.Баймак ул. Мира 4А'
            }
        ],
    ['11']:
        [
            {
                blockTitle: 'Салаватский район',
                image: region11_1,
                title: 'Школа на 80 ученических мест с детским садом на 40 мест',
                subtitle: 'Салаватский район с. Лаклы'
            }
        ],
    ['12']:
        [
            {
                blockTitle: 'Янаульский район',
                image: region12_1,
                title: 'Многоквартирный жилой дом',
                subtitle: ''
            },
            {
                blockTitle: 'Янаульский район',
                image: region12_2,
                title: 'Многоквартирный жилой дом',
                subtitle: 'Янаул, мкрн. Южный'
            },
            {
                blockTitle: 'Янаульский район',
                image: region12_3,
                title: 'Комплексная застройка и благоустройство квартала Италмаз ',
                subtitle: 'Янаульский район, с. Шудек'
            }
        ],
    ['13']:
        [
            {
                blockTitle: 'Нефтекамский район',
                image: region13_1,
                title: 'Многоквартирный жилой дом',
                subtitle: 'г. Нефтекамск,  ул. Городская д. 26'
            },
            {
                blockTitle: 'Нефтекамский район',
                image: region13_2,
                title: 'Многоквартирный жилой дом',
                subtitle: 'г. Нефтекамск,  ул. Городская  д. 32'
            },
            {
                blockTitle: 'Нефтекамский район',
                image: region13_3,
                title: 'Многоквартирный жилой дом',
                subtitle: 'г. Нефтекамск, ул. Городская д. 29'
            },
            {
                blockTitle: 'Нефтекамский район',
                image: region13_4,
                title: 'Детский сад на 220 мест',
                subtitle: 'г. Нефтекамск ул. Ленина 47 '
            },
            {
                blockTitle: 'Нефтекамский район',
                image: region13_5,
                title: 'Детский сад на 220 мест',
                subtitle: 'г. Нефтекамск мкрн. №25, пр.Комсомольский ,д.41Г'
            },
        ],
    ['14']:
        [
            {
                blockTitle: 'Калтасинский район',
                image: region14_1,
                title: 'Многоквартирный жилой дом',
                subtitle: 'с. Калтасы, ул. Кооперативная д. 26'
            },
            {
                blockTitle: 'Калтасинский район',
                image: region14_2,
                title: 'Многоквартирный жилой дом',
                subtitle: 'Калтасинский район, с. Краснохолмский, ул.Комсомольская , д.4 и д.6'
            },
            {
                blockTitle: 'Калтасинский район',
                image: region14_3,
                title: 'Детский сад на 120 мест',
                subtitle: 'Калтасинский район, с. Калтасы ул. Карла Маркса 66В '
            },
            {
                blockTitle: 'Калтасинский район',
                image: region14_4,
                title: 'СОШ №2',
                subtitle: 'Калтасинский район,с. Краснохолмский ул. Тимирая 10'
            },
        ],
    ['15']:
        [
            {
                blockTitle: 'Бураевский район',
                image: region15_1,
                title: 'Строительство детского сада на 95 мест',
                subtitle: 'Бураевский район, с. Бураево'
            },
            {
                blockTitle: 'Бураевский район',
                image: region15_2,
                title: 'Физкультурно-оздоровительный комплекс',
                subtitle: 'с. Бураево  ул. Уральская д. 48 к.2'
            },
            {
                blockTitle: 'Бураевский район',
                image: region15_3,
                title: 'Многоквартирный жилой дом',
                subtitle: 'с. Бураево  ул.Вострецова 24'
            },
        ]
}

export const mapElementSlice = createSlice({
    name: 'mapElementSlice',
    initialState,
    reducers: {}
})

export interface IMapElement {
    blockTitle: string
    image: StaticImageData
    title: string
    subtitle: string
}

interface MapElementInitialState {
    [key: string]: IMapElement[]
}

export const mapElementReducer = mapElementSlice.reducer