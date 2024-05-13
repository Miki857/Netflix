import React from 'react';
import "./css/main.css";

import tv1 from "../img/tv.png";
import video1 from "../img/video1.mp4";

import img1 from "../img/mobile-0819.jpg";
import chicken from "../img/boxshot.png";
import gif from "../img/gif.gif";

import tv2 from "../img/device-pile.png";
import video2 from "../img/video-devices.mp4";

import img2 from "../img/kids.png";

const Main = () => {
    const showLouver = (louver) => {
        document.querySelector("#" + louver).classList.toggle("louverHidden");
    }; 

    return (
        <section className='main__section flex flex-column align-center'>
            {/* SECTION 1 */}
            <div className='main__section__container flex flex-column justify-center align-center gap-01'>
                <div className='container flex flex-column justify-center align-center gap-01'>
                    <div className='flex flex-column align-center'>
                        <h3>Disfruta en tu TV</h3>
                        <p>Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</p>
                    </div>
                    <div className='main__section__container__video__container'>
                        <img src={tv1} alt="tv1"/>
                        <video src={video1} autoPlay loop></video>
                    </div>
                </div>
            </div>

            {/* SECTION 2 */}
            <div className='main__section__container flex justify-center align-center gap-01'>
                <div className='container flex flex-column justify-center align-center gap-01'>
                    <div className='flex flex-column align-center'>
                        <h3>Descarga tus series para verlas offline</h3>
                        <p>Guarda tu contenido favorito y tendrás siempre algo para ver.</p>
                    </div>
                    <div className='main__section__container__video__container'>
                        <img src={img1} alt="tv1"/>
                        <div className='animation flex justify-evenly align-center gap-01'>
                            <img src={chicken} alt="Looks Like Chicken"/>
                            <div>
                                <p className='title'>Stranger Things</p>
                                <p className='status'>Descargando...</p>
                            </div>
                            <img src={gif} alt="Gif"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 3 */}
            <div className='main__section__container flex flex-column justify-center align-center gap-01'>
                <div className='container flex flex-column justify-center align-center gap-01'>
                    <div className='flex flex-column align-center'>
                        <h3>Disfruta donde quieras</h3>
                        <p>Películas y series ilimitadas en tu teléfono, tablet, laptop y TV.</p>
                    </div>
                    <div className='main__section__container__video__container'>
                        <img src={tv2} alt="tv1"/>
                        <video className='video2' src={video2} autoPlay loop></video>
                    </div>
                </div>
            </div>

            {/* SECTION 4 */}
            <div className='main__section__container flex flex-column justify-center align-center gap-01'>
                <div className='container flex flex-column justify-center align-center gap-01'>
                    <div className='flex flex-column align-center'>
                        <h3>Crea perfiles para niños</h3>
                        <p>Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía.</p>
                    </div>

                    <img className='img2' src={img2} alt="" />
                </div>
            </div>

            {/* SECTION 5 */}
            <div className='main__section__louvers flex flex-column justify-center align-center gap-01'>
                <h3>Preguntas frecuentes</h3>
                {/* LOUVERS */}
                <div className='louver'>
                    <div className='louver__title flex justify-between' onClick={() => showLouver("louver-1")}>
                        <h4>¿Que es Netflix?</h4>
                        <h4>→</h4>
                    </div>
                    <div id='louver-1' className='louver__slider louverHidden'>
                        <p>Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.</p>
                        <br />
                        <p>Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!</p>
                    </div>
                </div>
                
                <div className='louver'>
                    <div className='louver__title flex justify-between' onClick={() => showLouver("louver-2")}>
                        <h4>¿Cuanto cuesta Netflix?</h4>
                        <h4>→</h4>
                    </div>
                    <div id='louver-2' className='louver__slider louverHidden'>
                        <p>Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde S/ 24.90 hasta S/ 44.90 al mes. Sin costos adicionales ni contratos.</p>
                    </div>
                </div>
                
                <div className='louver'>
                    <div className='louver__title flex justify-between' onClick={() => showLouver("louver-3")}>
                        <h4>¿Donde puedo ver Netflix?</h4>
                        <h4>→</h4>
                    </div>
                    <div id='louver-3' className='louver__slider louverHidden'>
                        <p>Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta de Netflix para ver contenido al instante a través de netflix.com desde tu computadora personal o en cualquier dispositivo con conexión a internet que cuente con la app de Netflix, como smart TV, smartphones, tablets, reproductores multimedia y consolas de juegos.</p>
                        <br />
                        <p>Además, puedes descargar tus series favoritas con iOS, Android o la app para Windows 10. Con la función de descarga, puedes ver donde vayas y sin conexión a internet. Lleva Netflix contigo adonde sea.</p>
                    </div>
                </div>
                
                <div className='louver'>
                    <div className='louver__title flex justify-between' onClick={() => showLouver("louver-4")}>
                        <h4>¿Como cancelo?</h4>
                        <h4>→</h4>
                    </div>
                    <div id='louver-4' className='louver__slider louverHidden'>
                        <p>Netflix es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando quieras.</p>
                    </div>
                </div>
                
                <div className='louver'>
                    <div className='louver__title flex justify-between' onClick={() => showLouver("louver-5")}>
                        <h4>¿Que puedo ver en Netflix?</h4>
                        <h4>→</h4>
                    </div>
                    <div id='louver-5' className='louver__slider louverHidden'>
                        <p>Netflix tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras.</p>
                    </div>
                </div>
                
                <div className='louver'>
                    <div className='louver__title flex justify-between' onClick={() => showLouver("louver-6")}>
                        <h4>¿Es bueno Netflix para los niños?</h4>
                        <h4>→</h4>
                    </div>
                    <div id='louver-6' className='louver__slider louverHidden'>
                        <p>La experiencia de Netflix para niños está incluida en la membresía para que los padres tengan el control mientras los peques disfrutan series y películas familiares en su propio espacio.</p>
                        <br />
                        <p>Los perfiles para niños incluyen controles parentales protegidos por PIN que te permiten restringir el contenido que pueden ver los niños en función de la clasificación por edad y bloquear determinados títulos que no quieras que los niños vean.</p>
                    </div>
                </div>
                
                <div className='louver'>
                    <div className='louver__title flex justify-between' onClick={() => showLouver("louver-7")}>
                        <h4>¿Porque contratarme?</h4>
                        <h4>→</h4>
                    </div>
                    <div id='louver-7' className='louver__slider grid-center gap-02 louverHidden'>
                        <div>
                            <p>Como desarrollador, siempre me esfuerzo por alcanzar la excelencia en mi trabajo. Debo reconocer que mi punto vulnerable se encuentra en el ámbito del diseño.</p>
                            <br />
                            <p>"La perfección no es alcanzable, pero si persigues la perfección, puedes alcanzar la excelencia." - Vince Lombardi</p>
                        </div>
                        <a href="https://portfolio-mc.netlify.app/"><button className='button cursor-pointer'>Contratame</button></a>
                    </div>
                </div>
                    
                <form className='flex flex-column align-center gap-02'>
                    <p>¿Quieres ver Netflix ya? Ingresa tu email o número de celular para crear una cuenta o reiniciar tu membresía.</p>
                    
                    <div className='flex flex-column align-center gap-01'>
                        <input type="text" className='input' placeholder='Email o número de celular...' required/>
                        <button className='button cursor-pointer'>Comenzar</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Main