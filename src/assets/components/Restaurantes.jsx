import React from 'react';
import NavigationBar from './NavigationBar';
import Restaurante from './Restaurantes/Restaurante';

const Restaurantes = () => {
    return (
        <div className='restaurant-page' >
            <NavigationBar></NavigationBar>
            
            <h1>Restaurantes</h1>

            <Restaurante></Restaurante>
            <Restaurante></Restaurante>
            <Restaurante></Restaurante>
            <Restaurante></Restaurante>
            <Restaurante></Restaurante>
            <Restaurante></Restaurante>
            <Restaurante></Restaurante>
            <Restaurante></Restaurante>
        </div>
    );
};

export default Restaurantes;