import React from 'react';
import { motion } from 'framer-motion';
import '../Styles/SideBar.css'; // Ensure your CSS has styles for 'active' class

const sidebarVariants = {
  open: { left: 0 },
  closed: { left: '-250px' }
};

const Sidebar = ({ isOpen, setCurrentComponent, currentComponent }) => {
  // Helper function to apply active class
  const getActiveClass = (componentName) => {
    return currentComponent === componentName ? 'active' : '';
  };

  return (
    <motion.div
      className="sidebar"
      animate={isOpen ? 'open' : 'closed'}
      variants={sidebarVariants}
      transition={{ type: 'tween', duration: 0.3 }}
    >
      <button 
        className={getActiveClass('NavigationMenu')} 
        onClick={() => setCurrentComponent('NavigationMenu')}
      >
        Navigation Menu
      </button>
      <button 
        className={getActiveClass('LoginPages')} 
        onClick={() => setCurrentComponent('LoginPages')}
      >
        Login Pages
      </button>
      <button 
        className={getActiveClass('LandingPages')} 
        onClick={() => setCurrentComponent('LandingPages')}
      >
        Landing Pages
      </button>
      <button 
        className={getActiveClass('Buttons')} 
        onClick={() => setCurrentComponent('Buttons')}
      >
        Buttons
      </button>
      <button 
        className={getActiveClass('SliderDesigns')} 
        onClick={() => setCurrentComponent('SliderDesigns')}
      >
        Slider Designs
      </button>
      <button 
        className={getActiveClass('CardDesigns')} 
        onClick={() => setCurrentComponent('CardDesigns')}
      >
        Card Designs
      </button>
      <button 
        className={getActiveClass('GamesPage')} 
        onClick={() => setCurrentComponent('GamesPage')}
      >
        Games
      </button>
      <button 
        className={getActiveClass('PageNotFound')} 
        onClick={() => setCurrentComponent('PageNotFound')}
      >
        404 Error Page
      </button>
    </motion.div>
  );
};

export default Sidebar;
