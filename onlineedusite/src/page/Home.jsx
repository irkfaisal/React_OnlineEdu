import React, { Fragment } from 'react';

import Header from '../components/Header/Header';
import HeroSection from '../components/Hero-Section/Hero-section';
import CompanySection from '../components/Company-section/company-section';
import AboutUs from '../components/AboutUs/AboutUs';
import Courses from '../components/Course-section/Courses';
import ChooseUs from '../components/ChooseUs/ChooseUs';
import Features from '../components/Features-section/features';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/footer';

const Home = () => {
    return (
        <Fragment>
           <Header></Header>
           <HeroSection></HeroSection>
           <CompanySection></CompanySection>
           <AboutUs></AboutUs>
           <Courses></Courses>
           <ChooseUs></ChooseUs>
           <Features></Features>
           <Newsletter></Newsletter>
           <Footer></Footer>
        </Fragment>
    )
}
export default Home;