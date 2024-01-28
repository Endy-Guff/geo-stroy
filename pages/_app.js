import '../styles/globals.scss'
import {Provider} from "react-redux";
import {store} from "../services/store";
import {Initial} from "../components/initial/initial";

function MyApp({Component, pageProps}) {
    return <Provider store={store}><Initial><Component {...pageProps} /></Initial></Provider>
}

export default MyApp
