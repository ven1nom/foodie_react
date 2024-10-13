import React, { useState } from 'react';
import menuData from '../utils/menuData';
import { MENUIMG_URL } from '../utils/constant';

const ResMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = menuData.map((item) => (
    <div key={item.id} className="menu-item">
      <h2>{item.name}</h2>
      <div className="image-container">
        {item.imageId && (
          <>
            <img
              src={`${MENUIMG_URL}${item.imageId}`}
              alt={item.name}
              className="menu-item-image"
            />
            <button className="add-to-cart-btn">Add to Cart</button>
          </>
        )}
      </div>
      <p className="category">{item.category}</p>
      <p className="description">{item.description}</p>
    </div>
  ));

  return (
    <div className="menu-accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h1>Recommended</h1>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <div className="menu-container">{menuItems}</div>}
    </div>
  );
};

export default ResMenu;