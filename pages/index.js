import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Router from 'next/router';
import {useEffect} from "react";

export default function Home() {

    useEffect(()=>{
        Router.push('/home')
    }, [])
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>

                {/*<link rel="preconnect" href="https://fonts.googleapis.com"/>*/}
                {/*<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>*/}
                {/*<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"*/}
                {/*      rel="stylesheet"/>*/}
            </Head>

        </div>
    )
}
