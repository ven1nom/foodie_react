import React from 'react';
import menuData from '../utils/menuData';
import { MENUIMG_URL } from '../utils/constant';

const ResMenu = () => {
  const menuItems = menuData.map((item) => (
    <div key={item.id} className="menu-item">
     <h1>{item.name}</h1>
      {item.imageId && (
        <img 
          src={`${MENUIMG_URL}${item.imageId}`} 
          alt={item.name}
          className="menu-item-image"
        />)}
      <p className="category">{item.category}</p>
      <p className="description">{item.description}</p>
    </div>
  ));

  return <div className="menu-container">{menuItems}</div>;
};

export default ResMenu;