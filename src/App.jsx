import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Overview from './components/Overview';
import WhyNow from './components/WhyNow';
import Sectors from './components/Sectors';
import Skills from './components/Skills';
import Impact from './components/Impact';
import Adoption from './components/Adoption';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Overview />
      <WhyNow />
      <Sectors />
      <Skills />
      <Impact />
      <Adoption />
      <Footer />
    </div>
  );
}

export default App;

