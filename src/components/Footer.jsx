import React from 'react';
import "./css/footer.css";

const Footer = () => {
  return (
    <section className='footer__secion grid-center'>
      <div className='footer__container flex flex-column align-center gap-01'>
        <p>¿Preguntas? Llama al <a href="#">0-800-52352</a></p>
        <div className='container'>
            <a href="#">Preguntas frecuentes</a>
            <a href="#">Centro de ayuda</a>
            <a href="#">Cuenta</a>
            <a href="#">Prensa</a>
            <a href="#">Relaciones con inversionistas</a>
            <a href="#">Empleo</a>
            <a href="#">Canjear tarjetas de regalo</a>
            <a href="#">Comprar tarjetas de regalo</a>
            <a href="#">Formas de ver</a>
            <a href="#">Términos de uso</a>
            <a href="#">Privacidad</a>
            <a href="#">Preferencias de cookies</a>
            <a href="#">Información corporativa</a>
            <a href="#">Contáctanos</a>
            <a href="#">Prueba de velocidad</a>
            <a href="#">Avisos legales</a>
            <a href="#">Solo en Netflix</a>
        </div>
        <div className='flex flex-column align-center gap-01'>
            <select name="idioma" id="idioma" className='select'>
                <option value="español">Español</option>
                <option value="english">English</option>
            </select>
            <h4>Netflix Perú</h4>
        </div>
      </div>
    </section>
  )
}

export default Footer