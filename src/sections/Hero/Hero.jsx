import styles from "./HeroStyles.module.css";

import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import Resume from "../../assets/resume.pdf";
import { useTheme } from "../../common/ThemeContext";
import hero3 from "../../assets/hero3.png";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={hero3}
          className={styles.hero}
          alt="Profile picture of Rahul Mukherjee"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Rahul
          <br />
          Mukherjee
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://x.com/rahulmukhopadh1" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/ALMOSTGOD1999" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-mukhopadhyay-b33553170/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p>
          I&#39;m a Frontend Developer <br />
          based in Kolkata,India.
          <br />
          Working towards creating software <br /> that makes life easier and
          more meaningful.
        </p>
        <a href={Resume} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
