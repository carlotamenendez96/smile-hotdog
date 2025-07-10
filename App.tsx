import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import { hotDogs, drinks } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main>
        <Hero />
        <MenuSection hotDogs={hotDogs} drinks={drinks} />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;