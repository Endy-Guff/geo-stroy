import s from './headerTop.module.scss'
import Image from "next/image";
import logo from '../../assets/images/logo.svg'
import {HeaderNav} from "../headerNav/headerNav";

export const HeaderTop = () => {
    return (
        <div className={s.wrapper}>
            <Image src={logo}/>
            <HeaderNav/>
            <a className={s.tel} href="tel:+7999987234">+7 999 987-23-4</a>
        </div>
    );
};

