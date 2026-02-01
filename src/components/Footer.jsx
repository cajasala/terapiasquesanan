import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>Terapias Que Sanan</h3>
                    <p>Equilibrio para tu cuerpo y mente.</p>
                </div>
                <div className="footer-section">
                    <h4>Contacto</h4>
                    <p>Email: lufdasanlop@gmail.com</p>
                    <p>Tel: +57 310 304 1012</p>
                </div>
                <div className="footer-section">
                    <h4>Legal</h4>
                    <p className="legal-notice">Este servicio no reemplaza la atención médica tradicional.</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Terapias Que Sanan. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
