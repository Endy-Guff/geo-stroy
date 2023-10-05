import s from './homeAbout.module.scss'
import {FC} from "react";

interface HeaderAboutItemProps {
    count: string
    text: string
}

export const HomeAboutItem: FC<HeaderAboutItemProps> = ({count, text}) =>{
    return <div className={s.item}>
        <span className={s.count}>{count}</span>
        <span className={s.text}>{text}</span>
    </div>
}