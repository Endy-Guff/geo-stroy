import React, {FC, PropsWithChildren} from 'react';
import s from '../homeObject.module.scss'

interface TabProps {
    isActive: boolean
    onChange: () => void
}

export const Tab: FC<PropsWithChildren<TabProps>> = ({onChange, isActive, ...rest}) => {
    return (
        <button className={`${s.tabBtn} ${isActive?s.tabBtnActive:''}`} onClick={onChange} {...rest}/>
    );
};

