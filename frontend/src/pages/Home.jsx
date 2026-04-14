import { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    // Select all elements that should reveal on scroll
    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="home-page fade-in">
      <Hero />
      <div className="reveal"><About /></div>
      <div className="reveal"><Services /></div>
      <div className="reveal"><Gallery /></div>
      <div className="reveal"><Reviews /></div>
      <div className="reveal"><Contact /></div>
      <Footer />
    </div>
  );
}

export default Home;
