import React, {FC} from 'react';
import s from './homeObjects.module.scss'
import Image from "next/image";
import img from '../../../assets/images/homeObject1.jpg'
import {ButtonWithArrow} from "../../buttonWithArrow/buttonWithArrow";
import {ComplexHouseType} from "../../../common/types";
import {useGetComplexQuery} from "../../../services/api/complexesApi";

interface HomeObjectsItemProps {
    house: ComplexHouseType
}

export const HomeObjectsItem: FC<HomeObjectsItemProps> = ({house: {name, address, id}}) => {
    const {isLoading, data} = useGetComplexQuery({id})
    return (
        <div className={s.item}>
            <Image className={s.itemImg} src={img}/>
            <h6 className={s.adress}>{address}</h6>
            {/*<span className={s.type}>Жилой дом</span>*/}
            <ButtonWithArrow>Смотреть Объект</ButtonWithArrow>
        </div>
    );
};
