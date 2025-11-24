import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { Mission } from './components/Mission';
import { Pricing } from './components/Pricing';
import { Rules } from './components/Rules';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Partners />
        <Mission />
        <Pricing />
        <Rules />
      </main>
      <Footer />
    </div>
  );
};

export default App;