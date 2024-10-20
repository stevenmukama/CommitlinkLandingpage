import Banner from './common/Banner';
import BackToTop from './components/BackToTop';
import Benefits from './components/Benefits';
import ContactUs from './components/ContactUs';
import FaqComponent from './components/FaqComponent';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Stats from './components/Stats';
import Team from './components/Team';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <>
      <Banner />
      <Nav />
      <Hero />
      <Benefits />
      <Stats />
      <Testimonials />
      <Team />
      <FaqComponent />
      <ContactUs />
      <Footer />
      <BackToTop />
    </>
  );
}
