import React, { useState } from 'react';
import './EvaluationWizard.css';

const STEPS = [
    {
        id: 1,
        question: "¿Cuál es tu principal motivo de consulta?",
        options: [
            { label: "Dolor físico", value: "pain" },
            { label: "Estrés o ansiedad", value: "stress" },
            { label: "Cansancio o fatiga", value: "fatigue" },
            { label: "Problemas digestivos", value: "digestive" },
            { label: "Dormir mal", value: "sleep" }
        ]
    },
    {
        id: 2,
        question: "Algunos detalles sobre tus síntomas:",
        subQuestions: [
            { id: "musclePain", label: "¿Sientes dolor muscular o articular?", type: "yesno" },
            { id: "stressLevel", label: "¿Qué nivel de estrés sientes actualmente?", type: "select", options: ["Bajo", "Medio", "Alto"] },
            { id: "lowEnergy", label: "¿Te sientes con poca energía?", type: "yesno" }
        ]
    },
    {
        id: 3,
        question: "¿Qué tipo de tratamiento prefieres?",
        options: [
            { label: "Enfoque físico (cuerpo)", value: "physical" },
            { label: "Enfoque energético (mente/energía)", value: "energy" },
            { label: "Ambos", value: "both" }
        ]
    }
];

const EvaluationWizard = () => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [recommendation, setRecommendation] = useState(null);

    const handleOptionSelect = (stepId, value) => {
        setAnswers(prev => ({ ...prev, [stepId]: value }));

        // Auto advance for single choice steps if not the last step logic-wise
        // But for step 2 (multiple inputs), we need a "Next" button.
        // For Step 1 and 3, simple click advances.
        if (step !== 1) {
            nextStep();
        }
    };

    const handleMultiChange = (id, value) => {
        setAnswers(prev => ({ ...prev, [id]: value }));
    };

    const nextStep = () => {
        if (step < STEPS.length - 1) {
            setStep(step + 1);
        } else {
            calculateResult();
        }
    };

    const prevStep = () => {
        if (step > 0) setStep(step - 1);
    };

    const calculateResult = () => {
        // Logic:
        // Pain -> Tuina
        // Stress/Anxiety -> Acupuntura
        // Fatigue -> Suero
        // Sleep -> Reflexología (or Acupuntura)
        // Digestive -> Acupuntura

        const reason = answers[1]; // Step 1 value
        const preference = answers[3]; // Step 3 value

        // Symptoms
        const hasPain = answers.musclePain === 'yes';
        const highStress = answers.stressLevel === 'Alto';
        const lowEnergy = answers.lowEnergy === 'yes';

        let result = {};

        if (reason === 'pain' || hasPain) {
            result = {
                title: "Masaje Tuina",
                description: "Dado que presentas dolor físico, el Masaje Tuina es ideal para liberar tensiones musculares y desbloquear canales energéticos.",
                icon: "👐"
            };
        } else if (reason === 'stress' || highStress) {
            result = {
                title: "Acupuntura",
                description: "Para combatir el estrés y la ansiedad, la Acupuntura es altamente efectiva para regular el sistema nervioso y restaurar la calma.",
                icon: "✨"
            };
        } else if (reason === 'fatigue' || lowEnergy) {
            result = {
                title: "Suero Terapia",
                description: "Para revitalizar tu cuerpo y combatir la fatiga, la Suero Terapia aportará los nutrientes esenciales que necesitas directamente.",
                icon: "💧"
            };
        } else if (reason === 'sleep') {
            result = {
                title: "Reflexología Podal",
                description: "La Reflexología es excelente para inducir una relajación profunda y mejorar la calidad del sueño.",
                icon: "👣"
            };
        } else {
            // Default or Mixed
            result = {
                title: "Tratamiento Combinado",
                description: "Tus síntomas sugieren un desequilibrio múltiple. Recomendamos una valoración presencial para combinar Acupuntura y Masaje.",
                icon: "🌿"
            };
        }

        // Preference modifier (simplified for this demo)
        if (preference === 'physical' && result.title === 'Acupuntura') {
            // Keep recommendation but note approach
        }

        setRecommendation(result);
        setStep(STEPS.length); // Show result state
    };

    const resetWizard = () => {
        setStep(0);
        setAnswers({});
        setRecommendation(null);
    };

    return (
        <section id="evaluacion" className="wizard-section">
            <div className="container wizard-container">
                <div className="wizard-card">
                    {step < STEPS.length && (
                        <>
                            <div className="wizard-header">
                                <span className="step-indicator">Paso {step + 1} de {STEPS.length}</span>
                                <h3>Evaluación de Bienestar</h3>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}></div>
                                </div>
                            </div>

                            <div className="wizard-content">
                                <h4>{STEPS[step].question}</h4>

                                {step === 1 ? (
                                    <div className="multi-questions">
                                        {STEPS[step].subQuestions.map(q => (
                                            <div key={q.id} className="form-group">
                                                <label>{q.label}</label>
                                                {q.type === 'yesno' && (
                                                    <div className="btn-group">
                                                        <button
                                                            className={`btn-choice ${answers[q.id] === 'yes' ? 'selected' : ''}`}
                                                            onClick={() => handleMultiChange(q.id, 'yes')}
                                                        >Sí</button>
                                                        <button
                                                            className={`btn-choice ${answers[q.id] === 'no' ? 'selected' : ''}`}
                                                            onClick={() => handleMultiChange(q.id, 'no')}
                                                        >No</button>
                                                    </div>
                                                )}
                                                {q.type === 'select' && (
                                                    <div className="btn-group">
                                                        {q.options.map(opt => (
                                                            <button
                                                                key={opt}
                                                                className={`btn-choice ${answers[q.id] === opt ? 'selected' : ''}`}
                                                                onClick={() => handleMultiChange(q.id, opt)}
                                                            >{opt}</button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                        <button className="btn btn-primary btn-next" onClick={nextStep} disabled={!answers.musclePain || !answers.stressLevel || !answers.lowEnergy}>
                                            Siguiente
                                        </button>
                                    </div>
                                ) : (
                                    <div className="options-grid">
                                        {STEPS[step].options.map(opt => (
                                            <button
                                                key={opt.value}
                                                className="option-card"
                                                onClick={() => handleOptionSelect(STEPS[step].id, opt.value)}
                                            >
                                                {opt.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {step > 0 && step !== 1 && (
                                <button className="btn-back" onClick={prevStep}>Atrás</button>
                            )}
                        </>
                    )}

                    {step === STEPS.length && recommendation && (
                        <div className="result-container">
                            <div className="result-header">
                                <h3>Tu Recomendación Personalizada</h3>
                                <div className="result-icon">{recommendation.icon}</div>
                                <h4>{recommendation.title}</h4>
                            </div>
                            <p className="result-description">
                                {recommendation.description}
                            </p>
                            <div className="result-cta">
                                <p className="empathy-msg">¡Es el primer paso para sentirte mejor!</p>
                                <button className="btn btn-primary whatsapp-btn">
                                    Reservar por WhatsApp
                                </button>
                                <button className="btn btn-outline" onClick={resetWizard}>
                                    Volver a evaluar
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default EvaluationWizard;
