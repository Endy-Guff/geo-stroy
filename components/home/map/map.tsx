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
            case '1':
                mapListenerRef.current.setMapElementIsShow(true)
                mapListenerRef.current.setActiveElementIndex(1)
                break
            case '2':
                mapListenerRef.current.setMapElementIsShow(true)
                mapListenerRef.current.setActiveElementIndex(2)
                break
            case '3':
                mapListenerRef.current.setMapElementIsShow(true)
                mapListenerRef.current.setActiveElementIndex(3)
                break
            case '4':
                mapListenerRef.current.setMapElementIsShow(true)
                mapListenerRef.current.setActiveElementIndex(4)
                break
            case '5':
                mapListenerRef.current.setMapElementIsShow(true)
                mapListenerRef.current.setActiveElementIndex(5)
                break
            case '6':
                mapListenerRef.current.setMapElementIsShow(true)
                mapListenerRef.current.setActiveElementIndex(6)
                break
            case '7':
                mapListenerRef.current.setMapElementIsShow(true)
                mapListenerRef.current.setActiveElementIndex(7)
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
