import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';

// TODO: Create a styles object called "styles"

function Navbar({ currentPage, pageHandler}) {
  // TODO: Add a style attribute to `nav`
  return (
  <header>
    
      <div>
        <h2>Michael Rogers</h2>
      </div>

    <nav className="navbar">

      <a  
      href="/"
      onClick={() => pageHandler('Home')}
      className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} >Home</a>

      <a 
      href="#Portfolio"
      onClick={() => pageHandler('Portfolio')}
      className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} >Portfolio</a>
      <a 
      href="#Resume"
      onClick={() => pageHandler('Resume')}
      className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} >Resume</a>
      <a 
      href="#Contact"
      onClick={() => pageHandler('Contact')}
      className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} >Contact </a>

    </nav>

  </header>
  );
}

export default Navbar;
