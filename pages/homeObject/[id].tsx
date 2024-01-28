import React from 'react';
import {ContainerLayout} from "../../components/containerLayout/containerLayout";
import {useRouter} from "next/router";
import {HomeObjectPage} from "../../components/homeObject/homeObject";

const homeObject = () => {
    const router = useRouter();
    const {id} = router.query;
    return (
        <ContainerLayout showNavigation={true}>
            <HomeObjectPage id={id as string}/>
        </ContainerLayout>
    );
};

export default homeObject;