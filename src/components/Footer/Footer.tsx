import { Container } from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import instagramIcon from "../../assets/instagram.png";
import discordIcon from "../../assets/discord.png";

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>A</span>
        <span>mr</span>
      </a>
      <div>
        <p>
          This site was made with
          <img src={reactIcon} alt="React" /> and with
          <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/ahmer-gondal-0a360210b/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a href="https://github.com/AhmerGo/" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </Container>
  );
}
