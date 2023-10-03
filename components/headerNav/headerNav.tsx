import s from './headerNav.module.scss'
import Link from "next/link";
import {useRouter} from "next/router";

const routes = [
    {id: 1, title: 'Главная', path: '/home'},
    {id: 2, title: 'О компании', path: '/about'},
    {id: 3, title: 'Объекты', path: '/objects'},
    {id: 4, title: 'Контакты', path: '/contacts'},
]
export const HeaderNav = () => {
    const {pathname} = useRouter()
    return (
        <div className={s.wrapper}>
            {routes.map(({id, title, path}) => (
                <Link key={id} href={path}><a
                    className={pathname === path ? s.link + ' ' + s.active : s.link}>{title}</a></Link>
            ))}
        </div>
    );
};

