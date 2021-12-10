import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../../styles/pages_styles/Home.css';

// TODO: Create a styles object called "styles"


function Home({ currentPage, pageHandler}) {
  // TODO: Add a style attribute to header and the h1 element

  return (
      <div className="home-container">
          <div className="heroImage"></div>

          <div className="text-container">
            <h1 className="title-name">Michael Rogers</h1>
            <h2 className="title-desc">Full Stack Web Developer</h2>
            <p className="about"> Dad. Developer. Coffee enthusiast. I'm a California native, curently living in the Sacramento Valley with experience as a full stack web developer. Coding and development fuel my passion for learning and ignite my creativity. I see each step in the process as an all consuming puzzle that I just can't put down. Check out my <span> <a onClick={() => pageHandler('Resume')} href="#Resume"> Resume</a> section to learn more.</span> </p>
          </div>
      </div>
  );
}

export default Home;