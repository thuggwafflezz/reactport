import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../../styles/pages_styles/Portfolio.css';

//import card component
import Card from '../Card'

const projects = [
    {
        name: 'Recipe Champion',
        className: 'recipeChampion',
        description: '',
        id: 1
    },
    {
        name: 'Ubiquitous Happiness',
        description: '',
        className: 'ubiquitousHappiness',
        id: 2
    },
    {
        name: 'Project 3',
        description: '',
        className: 'project3',
        id: 3
    },
    {
        name: 'Project 4',
        description: '',
        className: 'project4',
        id: 4
    },
    {
        name: 'Project 5',
        description: '',
        className: 'project5',
        id: 5
    },
    {
        name: 'Project 6',
        description: '',
        className: 'project6',
        id: 6
    },
]
function Portfolio() {
  // TODO: Add a style attribute to header and the h1 element

  return (
      <div>
        <div className="portfolio-container">
            {projects.map((project) => (
                <Card name={project.name} key={project.id} className={project.className}/>
            ))}
        </div>
      </div>
  );
}

export default Portfolio;