import React from 'react';
import logo from "../img/logo.png";
import "./css/hero.css";

const Hero = () => {
  return (
    <section className="hero__section">
        <div className='navDarkBG__container'>
            <nav className="flex justify-between align-center">
                    <img src={logo} alt="Logo" id='logo'/>

                    <div className='flex gap-00_5'>
                    <select name="idioma" id="idioma" className='select'>
                        <option value="español">Español</option>
                        <option value="english">English</option>
                    </select>
                    <button className='button cursor-pointer'>Iniciar sesión</button>
                    </div>
            </nav>

            <div className='flex flex-column align-center gap-01'>
                <h3>Películas y series ilimitadas y mucho más</h3>
                <p>Disfruta donde quieras. Cancela cuando quieras.</p>
                <form className='flex flex-column align-center gap-01'>
                    <p>¿Quieres ver Netflix ya? Ingresa tu email o número de celular para crear una cuenta o reiniciar tu membresía.</p>
                    
                    <div className='flex flex-column align-center gap-01'>
                        <input type="text" className='input' placeholder='Email o número de celular...' required/>
                        <button className='button cursor-pointer'>Comenzar</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Hero;