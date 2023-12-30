import React, {useRef} from 'react';
import s from './map.module.scss'
import {MapMouseListener} from "./mapMouseListener";
import {MapImg} from "./mapImg";
import {MapInfo} from "./mapInfo";
import {Title} from "../../title/title";

export const Map = () => {
    const mapListenerRef = useRef(null)
    const onMouseEnterHandler = (e: React.MouseEvent<SVGPathElement, MouseEvent>) => {
        // @ts-ignore
        const region = e.target.getAttribute('data-region')
        if (!region) {
            return
        }
        switch (region) {
            case '2':
                mapListenerRef.current.setMapElementIsShow(true)
                mapListenerRef.current.setActiveElementIndex(2)
                break
            case '4':
                mapListenerRef.current.setMapElementIsShow(true)
                mapListenerRef.current.setActiveElementIndex(4)
                break
            case '5':
                mapListenerRef.current.setMapElementIsShow(true)
                mapListenerRef.current.setActiveElementIndex(5)
                break
            case '7':
                mapListenerRef.current.setMapElementIsShow(true)
                mapListenerRef.current.setActiveElementIndex(7)
                break
            case '8':
                mapListenerRef.current.setMapElementIsShow(true)
                mapListenerRef.current.setActiveElementIndex(8)
                break
            case '9':
                mapListenerRef.current.setMapElementIsShow(true)
                mapListenerRef.current.setActiveElementIndex(9)
                break
            case '10':
                mapListenerRef.current.setMapElementIsShow(true)
                mapListenerRef.current.setActiveElementIndex(10)
                break
            case '11':
                mapListenerRef.current.setMapElementIsShow(true)
                mapListenerRef.current.setActiveElementIndex(11)
                break
            case '12':
                mapListenerRef.current.setMapElementIsShow(true)
                mapListenerRef.current.setActiveElementIndex(12)
                break
            case '13':
                mapListenerRef.current.setMapElementIsShow(true)
                mapListenerRef.current.setActiveElementIndex(13)
                break
            case '14':
                mapListenerRef.current.setMapElementIsShow(true)
                mapListenerRef.current.setActiveElementIndex(14)
                break
            case '15':
                mapListenerRef.current.setMapElementIsShow(true)
                mapListenerRef.current.setActiveElementIndex(15)
                break
            default:
                return;
        }
    }

    const onMouseLeaveHandler = () => {
        mapListenerRef.current.setMapElementIsShow(false)
        mapListenerRef.current.setActiveElementIndex(null)
    }
    return (
        <div className={s.wrapper}>
            <Title className={s.title}>Наша география</Title>
            <div className={s.inner}>
                <MapMouseListener ref={mapListenerRef}>
                    <MapImg onMouseEnterHandler={onMouseEnterHandler} onMouseLeaveHandler={onMouseLeaveHandler}/>
                </MapMouseListener>
                <MapInfo/>
            </div>
        </div>
    );
};
