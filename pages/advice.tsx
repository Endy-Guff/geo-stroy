import React from 'react';
import {ContainerLayout} from "../components/containerLayout/containerLayout";
import {Title} from "../components/title/title";
import {AdvicePage} from "../components/advice/advicePage";

const Advice = () => {
    return (
        <ContainerLayout>
            <AdvicePage/>
        </ContainerLayout>
    );
};

export default Advice;