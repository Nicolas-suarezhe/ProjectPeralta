import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../images/images';
import SignIn from '../SignIn/SignIn';


const NavigationBar = () => {

    const navigate = useNavigate()
    const [isVisible,setIsVisible] = useState(false)
    const [signIn, setSignIn] = useState(false)

    return (
        <div>
        <div className='Nav-bar'>
            <div className="promo">
                <h1>PROMO</h1>
            </div>
            <div className='logo-and-btn' >
                <div onClick={()=> navigate ('/')} className='logo-and-name'>
                    <img src={images.uradvisor} className='uradvisor-logo' alt="" />
                </div>
                <ul className='primary-btn' >
                    <li>
                        <button onClick={()=> setSignIn(!signIn)} className='primary-button'>
                            <img src={images.suscripcion} alt="" className='pri-btn-img'/>
                            <p>
                                Suscríbete
                            </p>
                        </button>
                    </li>
                    <li>
                        <button className='primary-button'>
                            <img src={images.contacto} alt="" className='pri-btn-img'/>
                            <p>
                                Contáctanos
                            </p>
                        </button>
                    </li>
                    <li>
                        <button className='primary-button'>
                            <img src={images.ayuda} alt="" className='pri-btn-img'/>
                            <p>
                                Ayuda
                            </p>
                        </button>
                    </li>
                </ul>
            </div>
            {signIn && <SignIn/> }
        </div>

            <ul className='departments' >
                <li className='nav-list'> 
                    <button onClick={()=> navigate('/restaurantes')} className='li-button' >
                        Restaurantes
                    </button> 
                </li>
                <li className='nav-list'>
                    <button onClick={()=> navigate('/panaderias')} className='li-button' >
                        Panaderías
                    </button> 
                </li>
                <li className='nav-list'>
                    <button onClick={()=> navigate('/bares')} className='li-button' >
                        Bares
                    </button> 
                </li>
                <li className='nav-list'>
                    <button onClick={()=> navigate('/sitiosinteres')} className='li-button' >
                        Sitios de interés
                    </button> 
                </li>
                <li className='nav-list'>
                    <button onClick={()=> navigate('/imperdibles')} className='li-button' >
                        Imperdibles
                    </button> 
                </li>
                <li className='nav-list'>
                    <button onClick={()=> setIsVisible (!isVisible)} className='li-button' >
                        +
                    </button> 
                </li>
            </ul>
            {
            isVisible && 
            <div className='displayable'>
                <div className='triangle-up'></div>
                <ul className='other-depts'>
                    <li>
                        <button onClick={()=> navigate ('/otroapartado1')} className='li-button' >
                            Otro apartado #1
                        </button>
                    </li>
                    <li>
                        <button onClick={()=> navigate ('/otroapartado2')} className='li-button' >
                            Otro apartado #2
                        </button>
                    </li>
                    <li>
                        <button onClick={()=> navigate ('/otroapartado3')} className='li-button' >
                            Otro apartado #3
                        </button>
                    </li>
                    <li>
                        <button onClick={()=> navigate ('/otroapartado4')} className='li-button' >
                            Otro apartado #4
                        </button>
                    </li>
                </ul>
            </div>
            }
        </div>
    );
};

export default NavigationBar;