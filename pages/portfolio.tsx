import React from 'react';
import {ContainerLayout} from "../components/containerLayout/containerLayout";
import {PortfolioPage} from "../components/portfolio/portfolio";

const Portfolio = () => {

    return (
        <ContainerLayout showNavigation={true}>
            <PortfolioPage/>
        </ContainerLayout>
    );
};

export default Portfolio;