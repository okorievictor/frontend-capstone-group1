/*
OLD IMPLEMENTATION:
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
*/

import { useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import VideoSection from './components/VideoSection/VideoSection';
import PlanetSection from './components/PlanetSection/PlanetSection';
import DataTable from './components/DataTable/DataTable';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting);
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

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
