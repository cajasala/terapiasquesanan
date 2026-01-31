import React from 'react';
import './Hero.css';
import miImagen from '../assets/MenteCuerpoV2.jpeg';

const Hero = () => {
    const scrollToEvaluation = () => {
        const element = document.getElementById('evaluacion');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="inicio" className="hero">
            <div><h3>.</h3></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <h1>Equilibra tu mente y cuerpo.</h1>
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
                    <img src={miImagen} alt="Relaxing nature" className="hero-image" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
