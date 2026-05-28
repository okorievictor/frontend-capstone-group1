import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import VideoSection from './components/VideoSection/VideoSection';
import PlanetSection from './components/PlanetSection/PlanetSection';
import DataTable from './components/DataTable/DataTable';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <VideoSection />
      <PlanetSection />
      <DataTable />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;