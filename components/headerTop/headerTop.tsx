import s from './headerTop.module.scss'
import Image from "next/image";
import logo from '../../assets/images/logo.svg'
import {HeaderNav} from "../headerNav/headerNav";
import {useState} from "react";

export const HeaderTop = () => {
    const [navIsOpen, setNavIsOpen] = useState(false)

    const handleNavIsClose = () => setNavIsOpen(false)

    return (
        <div className={s.wrapper}>
            <Image src={logo}/>
            <HeaderNav navIsOpen={navIsOpen} onNavIsClose={handleNavIsClose}/>
            <div className={`${s.navIcon} ${navIsOpen ? s.open : ''}`} onClick={() => setNavIsOpen(state => !state)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

