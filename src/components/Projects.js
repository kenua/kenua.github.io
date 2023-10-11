import { motion } from 'framer-motion';
import { ReactComponent as Arrow } from '../assets/images/arrow.svg';
import weatherAppScreenshot from '../assets/images/weather-app-screenshot.jpg';
import todoListScreenshot from '../assets/images/to-do-list-screenshot.jpg';
import mhBestiaryScreenshot from '../assets/images/mh-bestiary-screenshot.jpg';
import battleshipScreenshot from '../assets/images/battleship-screenshot.jpg';
import portfolioScreenshot from '../assets/images/portfolio-screenshot.jpg';

const projectsData = [
    {
        name: 'Weather App',
        desc: 'Built a weather app where users can select or enter the coordinates of a location and request its weather information using the Fetch API.',
        url: 'https://weather-5l2sper7d-kenua.vercel.app',
        imageUrl: weatherAppScreenshot,
    },
    {
        name: 'Battleship Game',
        desc: 'Made a battleship game in which users can play against a CPU. The purpose of the project was to practice Test-Driven Development.',
        url: 'https://kenua.github.io/battleship-game/',
        imageUrl: battleshipScreenshot,
    },
    {
        name: 'To-do list App',
        desc: "Built a to-do list app in which users can create and manage tasks. I utilized the localStorage API to preserve users' tasks.",
        url: 'https://kenua.github.io/todo-list/',
        imageUrl: todoListScreenshot,
    },
    {
        name: 'Portfolio v2',
        desc: 'Made my portfolio with React.js, Sass, and Framer Motion.',
        url: '#',
        imageUrl: portfolioScreenshot,
    },
    {
        name: 'MH Bestiary',
        desc: 'Developed a single-page application where an admin can upload information to a database.',
        url: 'https://kenua.github.io/monster-hunter-bestiary/',
        imageUrl: mhBestiaryScreenshot,
    },
];

const fadeVariants = {
    hiddenFromLeft: {
        opacity: 0,
        x: -100,
    },
    hiddenFromRight: {
        opacity: 0,
        x: 100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.5,
            type: 'spring',
        },
    },
};

function Projects() {

    const projectsList = projectsData.map((project, i) => {
        let isOdd = ((i+1) % 2 > 0 ) ? true : false;

        return (
            <motion.a 
                key={i} 
                href={project.url} 
                target="_blank"
                className="project" 
                tabIndex="0"
                variants={fadeVariants}
                initial={isOdd ? 'hiddenFromLeft' : 'hiddenFromRight'}
                whileInView="visible"
                viewport={{ 
                    once: true,
                    amount: 0.5,
                }}
            >
                <div className="project__circle"></div>

                <article className="project__content">
                    <img 
                        src={project.imageUrl} 
                        className="project__image" 
                        width="230" 
                        height="240" 
                        loading="lazy" 
                        alt=""
                    />
                    <div className="project__flexbox">
                        <h3 className="project__name fw-bold">{project.name}</h3>
                        <p className="project__desc">{project.desc}</p>
                        <p className="project__view-text fw-bold">
                            View Project
                            <Arrow className="project__arrow"/>
                        </p>
                    </div>
                </article>
            </motion.a>
        );
    });

    return (
        <section className="projects">
            <h2 id="projects" className="heading">Projects</h2>
            { projectsList }
        </section>
    );
}

export default Projects;