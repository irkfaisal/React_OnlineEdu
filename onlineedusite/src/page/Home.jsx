import React, { Fragment } from 'react';

import Header from '../components/Header/Header';
import HeroSection from '../components/Hero-Section/Hero-section';
import CompanySection from '../components/Company-section/company-section';

const Home = () => {
    return (
        <Fragment>
           <Header></Header>
           <HeroSection></HeroSection>
           <CompanySection></CompanySection>
        </Fragment>
    )
}
export default Home;