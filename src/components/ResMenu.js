import React from 'react';
import menuData from '../utils/menuData';
import { MENUIMG_URL } from '../utils/constant';

//Kya kya baaki hai - upto router tak
// fetch call kr k display kro and fallback mockData de doo ( if possible last mein krna)
// resId dena hoga , resTaurant ka uss hisab se , fetch kro data ( But ye bhi fetch wala kaam hai)
// ResCard click krte hi resMenu Pr aa jaaye

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