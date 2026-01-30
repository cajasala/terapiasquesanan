import React from 'react';
import './Hero.css';

const Hero = () => {
    const scrollToEvaluation = () => {
        const element = document.getElementById('evaluacion');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="inicio" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1>Sanamos el cuerpo, <span className="highlight">equilibramos la mente</span></h1>
                    <p className="hero-subtitle">
                        Terapias naturales personalizadas para tu bienestar físico y emocional.
                    </p>
                    <div className="hero-actions">
                        <button className="btn btn-primary" onClick={scrollToEvaluation}>
                            Realiza tu evaluación gratuita
                        </button>
                        <a href="#terapias" className="btn btn-outline">
                            Ver terapias
                        </a>
                    </div>
                </div>
                <div className="hero-image-placeholder">
                    <img src="/src/assets/hero-bg.png" alt="Relaxing nature" className="hero-image" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
