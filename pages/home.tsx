import {ContainerLayout} from "../components/containerLayout/containerLayout";
import {Header} from "../components/home/header/header";
import {HomeAbout} from "../components/home/homeAbout/homeAbout";
import {Description} from "../components/home/description/description";
import {Director} from "../components/home/director/director";
import {Map} from "../components/home/map/map";
import {HomeObjects} from "../components/home/homeObjects/homeObjects";

const Home = () => (<>
        <header>
            <ContainerLayout showNavigation={true}>
                <Header/>
            </ContainerLayout>
        </header>
        <main>
            <HomeObjects/>
            <ContainerLayout>
                <HomeAbout/>
                <Description/>
                <Director/>
                <Map/>
            </ContainerLayout>
        </main>
    </>
)

export default Home