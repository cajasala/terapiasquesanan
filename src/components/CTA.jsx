import React from 'react';
import './CTA.css';

const CTA = () => {
    const scrollToEvaluation = () => {
        document.getElementById('evaluacion')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="cta-section">
            <div className="container cta-container">
                <h2>Agenda tu cita y comienza tu proceso de sanación</h2>
                <div className="cta-buttons">
                    <a href="https://wa.me/573103041012" target="_blank" rel="noopener noreferrer" className="btn btn-primary whatsapp-btn">Reservar por WhatsApp</a>
                    <button className="btn btn-outline-light" onClick={scrollToEvaluation}>Agendar evaluación</button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
