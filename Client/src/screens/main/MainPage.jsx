import React, { useState } from 'react';
import "../Styles/MainPage.css";
import NavBar from "../../components/Compo/NavBar";
import Sidebar from '../../components/Compo/SideBar';
import Doc from "../mainPageCompo/Doc";
import NavigationMenu from "../mainPageCompo/NavigationMenus";
import LoginPages from "../mainPageCompo/LoginPages";
import LandingPages from "../mainPageCompo/LandingPages";
import Buttons from "../mainPageCompo/Buttons";
import SliderDesigns from "../mainPageCompo/SliderDesigns";
import CardDesigns from "../mainPageCompo/CardDesigns";
import GamesPage from '../mainPageCompo/Games';
import PageNotFound from '../mainPageCompo/PageNotFound';

export default function MainPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentComponent, setCurrentComponent] = useState('Doc');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case 'Doc':
        return <Doc toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />;
      case 'NavigationMenu':
        return <NavigationMenu isSidebarOpen={isSidebarOpen}/>;
      case 'LoginPages':
        return <LoginPages isSidebarOpen={isSidebarOpen}/>;
      case 'LandingPages':
        return <LandingPages isSidebarOpen={isSidebarOpen}/>;
      case 'Buttons':
        return <Buttons isSidebarOpen={isSidebarOpen}/>;
      case 'SliderDesigns':
        return <SliderDesigns isSidebarOpen={isSidebarOpen}/>;
      case 'CardDesigns':
        return <CardDesigns isSidebarOpen={isSidebarOpen}/>;
      case 'GamesPage':
        return <GamesPage isSidebarOpen={isSidebarOpen}/>;
      case 'PageNotFound':
        return <PageNotFound isSidebarOpen={isSidebarOpen}/>;
      default:
        return <Doc toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />;
    }
  };

  return (
    <>
      <div className="mainpagediv">
      <div className='navbardiv'><NavBar toggleSidebar={toggleSidebar} /></div>
        
        <Sidebar isOpen={isSidebarOpen} setCurrentComponent={setCurrentComponent}  />
        <main>
          {renderComponent()}
        </main>
      </div>
    </>
  );
}
