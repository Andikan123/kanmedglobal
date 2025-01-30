import React, { useState, useRef, useEffect } from 'react';
import "./Navbar.css"
import logo from '../../images/logo.png';
import { pageLinks, socialLinks } from '../../data';
import PageLinks from '../PageLinks';
import SocialLink from '../SocialLink';
import { FaTimes ,FaBars} from 'react-icons/fa'; // Import the 'times' icon for closing the sidebar

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Reference for sidebar and menu toggle button
  const sidebarRef = useRef(null);
  const menuToggleRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  // Close sidebar if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target) && !menuToggleRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button 
            type='button' 
            className='nav-toggle' 
            onClick={toggleSidebar} 
            ref={menuToggleRef}
          >
            <FaBars size={30}  />
          </button>
        </div>

        {/* Page Links */}
        <PageLinks 
          parentClass={`nav-links ${isSidebarOpen ? 'show' : ''}`} 
          itemClass='nav-link' 
        />

        {/* Social Links */}
        <ul className='nav-icons'>
          {socialLinks.map((link) => (
            <SocialLink {...link} key={link.id} itemClass='nav-icon' />
          ))}
        </ul>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`} ref={sidebarRef}>
        <button className="close-btn" onClick={toggleSidebar}>
          <FaTimes size={30} color="red" />
        </button>
        <PageLinks parentClass='sidebar-links' itemClass='sidebar-link' />
        <ul className='sidebar-icons'>
          {socialLinks.map((link) => (
            <SocialLink {...link} key={link.id} itemClass='sidebar-icon' />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
