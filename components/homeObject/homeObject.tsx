import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../services/store";
import {findHouseById} from "../../utils";
import axios from "axios";
import Image from 'next/image'
import s from './HomeObject.module.scss'
import {complexThunks} from "../../services/complexSlice";
import {Title} from "../title/title";
import {Modal, Values} from "./modal";
import {instance} from "../../services/api/baseApi";

export interface IHomeObjectProps {
    id: string
}

function calculateHeight(width: number, aspectRatio = '16:9') {
    const ratioParts = aspectRatio.split(':');
    const widthRatio = parseInt(ratioParts[0], 10);
    const heightRatio = parseInt(ratioParts[1], 10);

    return width / (widthRatio / heightRatio);
}

export const HomeObjectPage: FC<IHomeObjectProps> = ({id}) => {
    const dispatch = useAppDispatch()
    const {fetchComplex} = complexThunks
    const [svg, setSvg] = useState<any[]>(null)
    const [currentFloor, setCurrentFloor] = useState<number | undefined>()
    const complexes = useAppSelector((state) => state.complexesSlice)
    const complex = useAppSelector(state => state.complexSlice)
    const house = findHouseById(complexes, Number(id))
    const images = house?.images?.filter(image => image.file_ext === 'svg').map((image) => axios.get(image.file_url))
    const fassadimg = house?.images?.find(image => image.file_ext === 'jpg')?.file_url
    const [floorPlane, setFloorPanel] = useState()

    const [windowWidth, setWindowWidth] = useState(0);
    const [minus, setMinus] = useState(200);


    useEffect(() => {
        // Проверяем, что код выполняется на клиентской стороне
        if (typeof window !== 'undefined') {
            // Обновляем ширину окна при монтировании и при изменении размеров окна
            const handleResize = () => {
                setWindowWidth(window.innerWidth);
                setMinus(window.innerWidth <= 500 ? 80 : 200)
            };
            window.addEventListener('resize', handleResize);
            handleResize(); // Обновляем начальное значение
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);


    useEffect(() => {
        if (images) {
            Promise.all(images).then(res => setSvg(res))
        }
    }, [house])

    useEffect(() => {
        dispatch(fetchComplex({id}))
    }, [id])
//estate_floor
    console.log(floorPlane)
    const handleClick = (e: any) => {
        if (e.target.tagName === 'path') {
            const dataAttributeValue = e.target.getAttribute('data-num');
            setCurrentFloor(Number(dataAttributeValue))
            const plane = complex.find((floor) => floor.estate_floor === Number(dataAttributeValue))?.images.find(image => image.id === 2).images[0].file_url
            setFloorPanel(plane)
        }
    };

    const handleSubmit = (data: Values) => {
        instance.post('/submit', data).then(() => console.log(123))
    }

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom: '50px'
        }}>
            <div style={{position: 'relative', width: windowWidth - minus, height: calculateHeight(windowWidth - minus)}}>
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    maxWidth: windowWidth - minus,
                    maxHeight: calculateHeight(windowWidth - minus)
                }}>
                    <Image alt="" width={windowWidth - minus} height={calculateHeight(windowWidth - minus)}
                           src={fassadimg}/>
                </div>
                {svg?.map((svg) => <div
                    className={s.svgWrapper}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        maxWidth: windowWidth - minus,
                        maxHeight: calculateHeight(windowWidth - minus)
                    }}
                    onClick={handleClick}
                    dangerouslySetInnerHTML={{__html: svg.data}}>
                </div>)}
            </div>
            <p className={s.address}
               style={{textAlign: 'center', fontWeight: 400, padding: '50px 0'}}>{house?.address}</p>
            {floorPlane && <Title className={s.title}>План этажа</Title>}
            {floorPlane &&
              <Image src={floorPlane} width={windowWidth - minus} height={calculateHeight(windowWidth - minus)}/>}
            <div className={s.btnBlock}>
                <a className={s.link} href='tel:+78007075299'>Позвонить</a>
                <Modal onSubmit={handleSubmit}>
                    <button className={s.btn}>Заказать обратный звонок</button>
                </Modal>
            </div>
        </div>
    );
};

