import React, {FC} from 'react';
import s from './homeObjects.module.scss'
import Image from "next/image";
import img from '../../../assets/images/homeObject1.jpg'
import {ButtonWithArrow} from "../../buttonWithArrow/buttonWithArrow";
import {IHouse} from "../../../common/types";

// import {useGetComplexQuery} from "../../../services/api/complexesApi";

interface HomeObjectsItemProps {
    house: IHouse
    onClick?: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const HomeObjectsItem: FC<HomeObjectsItemProps> = ({onClick, house: {address, id, images}}) => {
    // const {isLoading, data} = useGetComplexQuery({id})

    const image = images.length ? images.find(img => img.file_ext === 'jpg').file_url : img

    return (
        <div className={s.item} onClick={onClick}>
            <Image className={s.itemImg} src={image} width={570} height={299} objectFit={'cover'}/>
            <h6 className={s.adress}>{address}</h6>
            {/*<span className={s.type}>Жилой дом</span>*/}
            <ButtonWithArrow>Смотреть Объект</ButtonWithArrow>
        </div>
    );
};
