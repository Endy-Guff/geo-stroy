import s from './containerLayout.module.scss'
import {FC, PropsWithChildren} from "react";
import {HeaderTop} from "../headerTop/headerTop";

export const ContainerLayout: FC<PropsWithChildren> = ({children}) => (
    <div className={s.wrapper}>
        <HeaderTop/>
        {children}
    </div>
)

