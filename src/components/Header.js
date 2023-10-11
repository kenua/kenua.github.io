import { ReactComponent as GithubIcon } from '../assets/images/githubIcon.svg';
import { ReactComponent as LinkedinIcon } from '../assets/images/linkedinIcon.svg';
import { ReactComponent as EnvelopeIcon } from '../assets/images/envelopeIcon.svg';
import { ReactComponent as BottomWaves } from '../assets/images/bottomWaves.svg';

function Header() {
    return (
        <header className="header">
            <svg className="header__background-waves" width="733" height="542" viewBox="0 0 733 542" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                    d="M732.519 26.9096V542C732.519 542 664.576 482.457 616.487 450.272C517.776 384.204 416.992 412.199 338.821 323.704C273.64 249.914 323.472 154.245 248.072 90.4139C186.514 38.3003 123.207 61.5456 49.8688 26.9096C-190.141 -86.4409 732.519 26.9096 732.519 26.9096Z" 
                    fill="#53E6AF" 
                    fillOpacity="0.3"
                />
                <path d="M732.52 -2.49746V485.203C732.52 485.203 663.633 428.826 614.877 398.352C514.797 335.798 412.615 362.304 333.36 278.515C267.275 208.648 317.797 118.067 241.352 57.6299C178.94 8.28747 114.754 30.2967 40.3986 -2.49746C-202.94 -109.821 732.52 -2.49746 732.52 -2.49746Z" 
                    fill="#53E6AF" 
                    fillOpacity="0.5"
                />
                <path d="M732.52 -19.2921V468.497C732.52 468.497 669.671 412.111 625.189 381.631C533.881 319.065 440.656 345.576 368.348 261.772C308.055 191.892 354.149 101.295 284.405 40.8463C227.464 -8.5052 168.904 13.5081 101.066 -19.2921C-120.943 -126.635 732.52 -19.2921 732.52 -19.2921Z" 
                    fill="#53E6AF"
                />
            </svg>

            <div className="header__flexbox wrapper">
                <div className="picture header__flex-item">
                    <div className="picture__circle" />
                    <div className="picture__circle" />
                    <div className="picture__circle" />
                    <div className="picture__circle picture__circle--img" />
                </div>
                <div className="header__content header__flex-item">
                    <h1 className="header__h1 fw-bold">Juanesteban Guerra</h1>
                    <h2 className="header__h2 fw-bold">Front-end Developer</h2>
                    <p className="header__para">
                        I'm a self-taught front-end developer aspiring to become a 
                        full-stack developer. Currently, I'm studying and building
                        projects to put into practice everything I learn.
                    </p>
                    <div className="header__hyperlinks">
                        <a 
                            href="https://github.com/kenua" 
                            target="_blank" 
                            className="anchor anchor--flex" 
                            tabIndex="0"
                        >
                            <GithubIcon className="anchor__icon" />
                            Github
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/juanesteban-guerra-medina" 
                            target="_blank" 
                            className="anchor anchor--flex" 
                            tabIndex="0"
                        >
                            <LinkedinIcon className="anchor__icon" />
                            Linkedin
                        </a>
                        <a 
                            href="mailto:juanestebanmedinag@gmail.com" 
                            className="anchor anchor--flex" 
                            tabIndex="0"
                        >
                            <EnvelopeIcon className="anchor__icon" />
                            Email
                        </a>
                    </div>
                </div>
            </div>

            <BottomWaves className="bottom-waves"/>
        </header>
    );
}

export default Header;