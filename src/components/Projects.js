import { ReactComponent as Arrow } from '../assets/images/arrow.svg';

// dummy dada
// remove later 🧹
const projectsData = [
    {
        name: 'weather-app',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quaerat, officia sunt in cupiditate reiciendis.',
        url: 'https://weather-5l2sper7d-kenua.vercel.app',
        imageUrl: 'https://github.com/kenua/battleship-game/blob/master/OG-image.png?raw=true',
    },
    {
        name: 'Battleship',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quaerat, officia sunt in cupiditate reiciendis.',
        url: 'https://weather-5l2sper7d-kenua.vercel.app',
        imageUrl: 'https://github.com/kenua/battleship-game/blob/master/OG-image.png?raw=true',
    },
    {
        name: 'Todo-list',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quaerat, officia sunt in cupiditate reiciendis.',
        url: 'https://weather-5l2sper7d-kenua.vercel.app',
        imageUrl: 'https://github.com/kenua/battleship-game/blob/master/OG-image.png?raw=true',
    },
    {
        name: 'Portfolio v2',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quaerat, officia sunt in cupiditate reiciendis.',
        url: 'https://weather-5l2sper7d-kenua.vercel.app',
        imageUrl: 'https://github.com/kenua/battleship-game/blob/master/OG-image.png?raw=true',
    },
    {
        name: 'MH BEstiary',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quaerat, officia sunt in cupiditate reiciendis.',
        url: 'https://weather-5l2sper7d-kenua.vercel.app',
        imageUrl: 'https://github.com/kenua/battleship-game/blob/master/OG-image.png?raw=true',
    },
];

function Projects() {

    const projectsList = projectsData.map((project, i) => {
        return (
            <a key={i} href={project.url} className="project" tabIndex="0">
                <div className="project__circle"></div>

                <article className="project__content">
                    <img src={project.imageUrl} className="project__image" />
                    <div className="project__flexbox">
                        <h3 className="project__name fw-bold">{project.name}</h3>
                        <p className="project__desc">{project.desc}</p>
                        <p className="project__view-text fw-bold">
                            View Project
                            <Arrow className="project__arrow"/>
                        </p>
                    </div>
                </article>
            </a>
        );
    });

    return (
        <section>
            <h2 id="projects" className="heading">Projects</h2>
            { projectsList }
        </section>
    );
}

export default Projects;