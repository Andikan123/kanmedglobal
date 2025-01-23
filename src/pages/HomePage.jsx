import React from 'react';
import Hero from '../components/hero/Hero'; // Import necessary components like Hero
import About from '../components/about/About'; // Other sections that belong to the homepage
import Services from '../components/service/Services';
import Footer from '../components/footer/Footer';
import Tours from "../components/tours/Tours"


const HomePage = () => {
  return (
    <div>
      <Hero /> {/* Hero section */}
      <About /> {/* About section */}
      <Services /> {/* Services section */}
      <Tours/>
      <Footer /> {/* Footer section */}
    </div>
  );
};

export default HomePage;
