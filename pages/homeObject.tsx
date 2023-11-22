import React from 'react';
import {ContainerLayout} from "../components/containerLayout/containerLayout";
import {HomeObjectPage} from "../components/homeObject/homeObject";

const HomeObject = () => {

    return (
        <ContainerLayout showNavigation={true}>
            <HomeObjectPage/>
        </ContainerLayout>
    );
};

export default HomeObject;