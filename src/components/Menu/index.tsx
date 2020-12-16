import React, { useState } from 'react';
import Header from '../Header';
import menuIndex from './menuIndex';
import MenuBar from '../DrawerSite';

// This menu has 2 mainly components Header and DrawerSite (Menu)

const MenuSite = () => {
  const { innerWidth } = window;
  const option = innerWidth > 800;
  const [mobileOpen, setMobileOpen] = useState(option);

  return (
    <div style={{ paddingTop: '120px' }}>
      <MenuBar menuItems={menuIndex} mobileOpen={mobileOpen} />
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
    </div>
  );
};

export default MenuSite;
