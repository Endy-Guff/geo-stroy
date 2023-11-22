import s from './headerNav.module.scss'
import Link from "next/link";
import {Link as AnchorLink} from 'react-scroll'
import {useRouter} from "next/router";

const routes = [
    {id: 1, title: 'Главная', path: '/home'},
    {id: 2, title: 'О компании', path: '/about'},
]
const anchorRoutes = [
    {id: 3, title: 'Объекты', path: '/objects'},
    {id: 4, title: 'Контакты', path: '/contacts'},
]
export const HeaderNav = () => {
    const router = useRouter();
    const {pathname} = useRouter()
    return (
        <div className={s.wrapper}>
            {routes.map(({id, title, path}) => (
                <Link key={id} href={path}><span
                    className={pathname === path ? s.link + ' ' + s.active : s.link}>{title}</span></Link>
            ))}
            {anchorRoutes.map(({id, title, path}) => pathname === '/home' ?
                <AnchorLink key={id} className={s.link} to={path.replace(/^\/(.*)$/, '$1')} smooth={true}>{title}</AnchorLink> : (
                    <span className={pathname === path ? s.link + ' ' + s.active : s.link} onClick={() => router.push({
                        pathname: '/home',
                        query: {fromOtherPage: true, path: path.replace(/^\/(.*)$/, '$1')},
                    })}>{title}</span>))}
        </div>
    );
};

