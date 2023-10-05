import s from './containerLayout.module.scss'
import {FC, PropsWithChildren} from "react";
import {HeaderTop} from "../headerTop/headerTop";

interface ContainerLayoutProps {
    showNavigation?: boolean
}

export const ContainerLayout: FC<PropsWithChildren<ContainerLayoutProps>> = ({children, showNavigation = false}) => (
    <div className={s.wrapper}>
        {showNavigation && <HeaderTop/>}
        {children}
    </div>
)

