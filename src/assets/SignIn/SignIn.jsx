import React from 'react';
import images from '../images/images';

const Bares = () => {
    return (
        <div className='sign-pop-up' >
            <div className='triangle-up' >
            </div>
            <div className='sign-form' >
                <img src={images.suscripcion} className='sign-img' alt="" />
                <form className='signin-form' action="">
                    <label htmlFor="">Nombres y apellidos</label>
                    <input className='sign-input' type="text" />

                    <label htmlFor="">Correo</label>
                    <input className='sign-input' type="text" />

                    <label htmlFor="">Celular</label>
                    <input className='sign-input' type="text" />
                    <br />
                    <button className='li-button' >Enviar</button>
                </form>
            </div>
        </div>

    );
};

export default Bares;