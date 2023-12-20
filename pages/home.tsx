import {ContainerLayout} from "../components/containerLayout/containerLayout";
import {Header} from "../components/home/header/header";
import {HomeAbout} from "../components/home/homeAbout/homeAbout";
import {Description} from "../components/home/description/description";
import {Director} from "../components/home/director/director";
import {Map} from "../components/home/map/map";
import {HomeObjects} from "../components/home/homeObjects/homeObjects";
import {HomeRec} from "../components/home/homeRec/homeRec";
import {Footer} from "../components/footer/footer";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {scroller} from "react-scroll";

const Home = () => {
    const router = useRouter();
    // @ts-ignore
    const {fromOtherPage, path} = router.query || {};

    useEffect(() => {
        if (fromOtherPage) {
            scroller.scrollTo(path as string, {
                smooth: true,
                duration: 500,
            });
        }
    }, [fromOtherPage, path]);

    return (
        <>
            <header>
                <ContainerLayout showNavigation={true}>
                    <Header/>
                </ContainerLayout>
            </header>
            <main>
                <ContainerLayout>
                    <HomeAbout/>
                </ContainerLayout>
                <HomeObjects/>
                <ContainerLayout>
                    <Description/>
                    <Director/>
                    <Map/>
                    <HomeRec/>
                    <Footer/>
                </ContainerLayout>
            </main>
        </>
    )
}

export default Home