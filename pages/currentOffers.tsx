import React from 'react';

import {ContainerLayout} from "../components/containerLayout/containerLayout";
import {CurrentOffersPage} from "../components/currentOffers/currentOffers";

const CurrentOffers = () => {
    return (
        <ContainerLayout showNavigation={true}>
            <CurrentOffersPage/>
        </ContainerLayout>
    );
};

export default CurrentOffers;