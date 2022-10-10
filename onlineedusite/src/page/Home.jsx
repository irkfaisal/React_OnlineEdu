import React, { Fragment } from 'react';

import Header from '../components/Header/Header';
import HeroSection from '../components/Hero-Section/Hero-section';
import CompanySection from '../components/Company-section/company-section';
import AboutUs from '../components/AboutUs/AboutUs';
import Courses from '../components/Course-section/Courses';

const Home = () => {
    return (
        <Fragment>
           <Header></Header>
           <HeroSection></HeroSection>
           <CompanySection></CompanySection>
           <AboutUs></AboutUs>
           <Courses></Courses>
        </Fragment>
    )
}
export default Home;