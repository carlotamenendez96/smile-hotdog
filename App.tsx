import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';
import { hotDogs, drinks } from './constants';

const App: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Carta de Hot Dogs', current: true }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main>
        <Hero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4" style={{display: 'none'}}>
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <MenuSection hotDogs={hotDogs} drinks={drinks} />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;