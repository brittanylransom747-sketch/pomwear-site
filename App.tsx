import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import SquigglyDivider from './components/SquigglyDivider';
import Solution from './components/Solution';
import Market from './components/Market';
import Roadmap from './components/Roadmap';
import Goals from './components/Goals';
import Footer from './components/Footer';

// Fix: Explicitly reference JSX.Element from the React import to resolve the "Cannot find namespace 'JSX'" error.
function App(): React.JSX.Element {
  return (
    <div className="bg-brand-cream text-brand-text font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Problem />
        <SquigglyDivider />
        <Solution />
        <Market />
        <Roadmap />
        <Goals />
      </main>
      <Footer />
    </div>
  );
}

export default App;
