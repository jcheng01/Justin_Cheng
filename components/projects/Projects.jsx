import styles from './Projects.module.scss';
import { useState } from 'react';

import { BiLinkExternal } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import { FiFolder } from 'react-icons/fi';

const Projects = () => {
  const [numItems, setNumItems] = useState(3);

  const items = [
    {
      id: 1,
      git: 'https://github.com/jcheng01/hangman-game',
      live: 'https://jcheng01.github.io/hangman-game/',
      title: 'Hangman Clone',
      skills: ['React', 'TypeScript', 'Tailwind CSS'],
      text: `Explored new building tools and deployed using GitHub pages.
      Practiced how to pass down states through different components in
      React with Typescript support.`,
    },
    {
      id: 2,
      git: 'https://github.com/jcheng01/imagerecognition',
      live: 'https://jcheng01.github.io/imagerecognition/',
      title: 'Image Recognition AI',
      skills: ['React', 'JavaScript ES6', 'SCSS'],
      text: `Created single web page to fetch JSON resources from two REST APIs.
      AI can understand a randomly generated image by parsing through
      information using JavaScript methods.`,
    },
    {
      id: 3,
      git: 'https://github.com/jcheng01/portfolio/tree/main/justincheng',
      live: 'https://justincheng2.netlify.app/',
      title: 'My Webpage V1',
      skills: ['HTML5', 'SCSS', 'JavaScript ES6'],
      text: ` First interaction of my personal Website created with raw
      HTML/SCSS/JavaScript. Implemented my own webpack to compile JS. Fun
      self- project to work on responsive UI.`,
    },
    {
      id: 4,
      git: 'https://github.com/jcheng01/portfolio/tree/main/justincheng',
      live: 'https://justincheng2.netlify.app/',
      title: 'My Webpage V1',
      skills: ['HTML5', 'SCSS', 'JavaScript ES6'],
      text: ` First interaction of my personal Website created with raw
      HTML/SCSS/JavaScript. Implemented my own webpack to compile JS. Fun
      self- project to work on responsive UI.`,
    },
    {
      id: 5,
      git: 'https://github.com/jcheng01/pokemonApp',
      live: 'https://jcheng01.github.io/pokemonApp/',
      title: 'Pokemon DataBase',
      skills: ['React', 'JSON', 'Tailwind CSS'],
      text: `Used Pokémon API to create an application using React.js and
      Tailwind imitating a database. The single page returns respective
      Pokémon data from API server using entered name to map through
      arrays of objects`,
    },
  ];

  const visibleItems = items.slice(0, numItems);

  function handleLoadMore() {
    setNumItems(numItems + 3);
  }

  return (
    <section id="projects" className={styles.projects}>
      <div>
        <h3>
          <span>02.</span>Stuff I made
        </h3>
        <hr />
      </div>

      <div className={styles.items}>
        {visibleItems.map((item) => (
          <div key={item.id}>
            <div className={styles.icons}>
              <FiFolder size={30} />
              <div>
                <a href={item.git} target="_blank">
                  <AiFillGithub size={30} />
                </a>
                <a href={item.live} target="_blank">
                  <BiLinkExternal size={30} />
                </a>
              </div>
            </div>
            <h2>
              <a href={item.live} target="_blank">
                {item.title}
              </a>
            </h2>
            <p>{item.text}</p>
            <ul>
              {item.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {numItems <= 3 ? (
        <button onClick={handleLoadMore} className={styles.btn}>
          View More
        </button>
      ) : (
        ''
      )}
    </section>
  );
};

export default Projects;
