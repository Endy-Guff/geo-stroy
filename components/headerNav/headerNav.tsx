import s from './headerNav.module.scss'
import Link from "next/link";
import {Link as AnchorLink} from 'react-scroll'
import {useRouter} from "next/router";
import {FC} from "react";

interface IHeaderNavProps {
    navIsOpen: boolean
    onNavIsClose: () => void
}

const routes = [
    {id: 1, title: 'Главная', path: '/home'},
    {id: 2, title: 'О компании', path: '/about'},
]
const anchorRoutes = [
    {id: 3, title: 'Объекты', path: '/objects'},
    {id: 4, title: 'Контакты', path: '/contacts'},
]
export const HeaderNav: FC<IHeaderNavProps> = ({navIsOpen, onNavIsClose}) => {
    const router = useRouter();
    const {pathname} = useRouter()

    const handleClick = () => onNavIsClose()

    return (
        <div className={`${s.wrapper} ${navIsOpen ? s.open : ''}`}>
            {routes.map(({id, title, path}) => (
                <Link key={id} href={path}><span
                    className={pathname === path ? s.link + ' ' + s.active : s.link} onClick={handleClick}>{title}</span></Link>
            ))}
            {anchorRoutes.map(({id, title, path}) => pathname === '/home' ?
                <AnchorLink key={id} className={s.link} onClick={handleClick} to={path.replace(/^\/(.*)$/, '$1')}
                            smooth={true}>{title}</AnchorLink> : (
                    <span className={pathname === path ? s.link + ' ' + s.active : s.link} onClick={() => {
                        handleClick()
                        router.push({
                            pathname: '/home',
                            query: {fromOtherPage: true, path: path.replace(/^\/(.*)$/, '$1')},
                        })
                    }}>{title}</span>))}
            <a className={s.tel} href="tel:+73472926141">+7(347) 292-61-41</a>
        </div>
    );
};

