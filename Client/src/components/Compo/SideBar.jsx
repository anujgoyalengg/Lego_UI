import React from 'react';
import { motion } from 'framer-motion';
import '../Styles/SideBar.css'; // Make sure to create this CSS file for styling

const sidebarVariants = {
  open: { left: 0 },
  closed: { left: '-250px' }
};

const Sidebar = ({ isOpen , setCurrentComponent  }) => {
  return (
    <motion.div
      className="sidebar"
      animate={isOpen ? 'open' : 'closed'}
      variants={sidebarVariants}
      transition={{ type: 'tween', duration: 0.3 }}
    >
      <button onClick={() => setCurrentComponent('NavigationMenu')}>Navigation Menu</button>
      <button onClick={() => setCurrentComponent('LoginPages')}>Login Pages</button>
      <button onClick={() => setCurrentComponent('LandingPages')}>Landing Pages</button>
      <button onClick={() => setCurrentComponent('Buttons')}>Buttons</button>
      <button onClick={() => setCurrentComponent('SliderDesigns')}>Slider Designs</button>
      <button onClick={() => setCurrentComponent('CardDesigns')}>Card Designs</button>
      <button onClick={() => setCurrentComponent('GamesPage')}>Games</button>
      <button onClick={() => setCurrentComponent('PageNotFound')}>404 Error Page</button>
    </motion.div>
  );
};

export default Sidebar;
