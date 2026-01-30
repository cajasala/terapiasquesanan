import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Approach from './components/Approach';
import Therapies from './components/Therapies';
import EvaluationWizard from './components/EvaluationWizard';
import CTA from './components/CTA';
import './App.css';

function App() {
  return (
    <Layout>
      <Hero />
      <Approach />
      <Therapies />
      <EvaluationWizard />
      <CTA />
    </Layout>
  );
}

export default App;
