import React from 'react';
import images from '../images/images';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Busca..." className='search-input' />
      <img className="search-image" src={images.fotoApartado} alt="Image" />
    </div>
  );
};

export default SearchBar;