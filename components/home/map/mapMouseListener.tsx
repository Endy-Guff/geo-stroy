import React, {FC, forwardRef, PropsWithChildren, useEffect, useImperativeHandle, useRef, useState} from 'react';
import {MapElement} from "./mapElement/mapElement";
import {useAppSelector} from "../../../services/store";
import {IMapElement} from "../../../services/mapElementSlice";

export const MapMouseListener = forwardRef<any, PropsWithChildren>(({children}, ref) => {
    const [mapElementIsShow, setMapElementIsShow] = useState(false)
    const [activeElementIndex, setActiveElementIndex] = useState<number | null>(null)
    const mapElementRef = useRef<HTMLDivElement>()
    useImperativeHandle(ref, () => {
        return {
            setMapElementIsShow(value: boolean) {
                setMapElementIsShow(value)
            },
            setActiveElementIndex(value: number | null) {
                setActiveElementIndex(value)
            }
        }
    })

    const onMouseMoveHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target
        const el = mapElementRef.current
        if (!target && !el) return
        if (el?.style) {
            el.style.left = e.pageX + 10 + 'px'
            el.style.top = e.pageY + 10 + 'px'
        }
    }

    const mapElementData = useAppSelector<IMapElement[]>(state=>state.mapElementSlice[activeElementIndex])

    return (
        <>
            <div ref={mapElementRef} style={{position: 'absolute', zIndex: 999, display: mapElementIsShow ? 'block' : 'none'}}>
                <MapElement elementInfo={mapElementData}/>
            </div>
            <div onMouseMove={onMouseMoveHandler}>
                {children}
            </div>
        </>
    );
});
