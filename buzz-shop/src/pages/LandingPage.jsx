import React from 'react';
import '../styles/Hero/landingPage.css';
//components
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import SecSection from '../components/SecSection';
import Footer from '../components/Footer';
const LandingPage = () => {
  return (
    <div className='landing__page'>
      <NavBar />
      <Banner />
      <SecSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
