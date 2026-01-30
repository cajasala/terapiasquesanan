import React from 'react';
import './Therapies.css';

const therapiesData = [
    {
        id: 1,
        title: "Suero Terapia",
        description: "Administración intravenosa de vitaminas y minerales que mejora la energía, refuerza el sistema inmune y apoya procesos de recuperación y desintoxicación.",
        icon: "💧"
    },
    {
        id: 2,
        title: "Acupuntura",
        description: "Terapia tradicional que estimula puntos específicos del cuerpo para equilibrar la energía, reducir el dolor, el estrés y mejorar funciones internas.",
        icon: "✨"
    },
    {
        id: 3,
        title: "Masaje Tuina",
        description: "Masaje terapéutico que trabaja músculos, articulaciones y meridianos energéticos, ideal para aliviar dolores físicos y tensiones profundas.",
        icon: "👐"
    },
    {
        id: 4,
        title: "Reflexología Podal",
        description: "Estimulación de puntos reflejos en los pies conectados con órganos y sistemas, favoreciendo la relajación y el equilibrio emocional.",
        icon: "👣"
    }
];

const Therapies = () => {
    return (
        <section id="terapias" className="therapies">
            <div className="container">
                <div className="section-header">
                    <h2>Nuestras Terapias</h2>
                    <p>Tratamientos diseñados para restaurar tu equilibrio</p>
                </div>
                <div className="therapies-grid">
                    {therapiesData.map((therapy) => (
                        <div key={therapy.id} className="therapy-card">
                            <div className="therapy-icon">{therapy.icon}</div>
                            <h3>{therapy.title}</h3>
                            <p>{therapy.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Therapies;
