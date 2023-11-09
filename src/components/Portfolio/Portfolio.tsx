import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>Projects..</h2>

      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/AhmerGo/Anime_Site_Go"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MERN-Stack Anime Site</h3>
              <p>
                {" "}
                MERN Full-Stack anime site deployed and hosted on AWS servers
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>AWS</li>
                <li>MERN</li>
                <li>Lua</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/AhmerGo/Discord_Email_Bot"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Discord Email Bot</h3>
              <p>
                Email-to-Discord Forwarder This script fetches unread emails
                from email accounts and designates the emails to specified
                channels based on source.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Discord.py</li>
                <li>IMAPLib</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/AhmerGo/ChatBot-API-Webscraper"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Chatbot API Webscraper</h3>
              <p>
                A script that integrates a Twitch bot to fetch and present a
                streamer's recent Matchmaking Rating (MMR) changes in Valorant.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Javascript</li>
                <li>Streambot Commands</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/AhmerGo/Wordpress_Automation"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Wordpress Automation</h3>
              <p>
                {" "}
                This script automates the process of setting up a WordPress site
                on an AWS EC2 instance. It configures Apache, MySQL, PHP,
                installs WordPress, and sets up a domain with SSL using Certbot.
                It also automates the DNS record creation on AWS Route 53.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Shell</li>
                <li>AWS</li>
                <li>Automation</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/AhmerGo/Portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Portfolio</h3>
              <p> This portfolio site</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Tailwind</li>
                <li>Typescript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/AhmerGo/RealtorSeleniumScript"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Realtor Selenium Webscraper</h3>
              <p>
                {" "}
                Enhance your real estate research with our Python-powered
                script; it utilizes Selenium to intelligently extract agent
                names and filtered property listings, delivering a seamless,
                automated data collection experience.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Selenium</li>
                <li>Python</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
