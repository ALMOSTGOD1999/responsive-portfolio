import styles from "./ProjectsStyles.module.css";
import m from "../../assets/m.png";
import cosmos from "../../assets/cosmos.webp";
import gtc from "../../assets/gtc.png";
import pf from "../../assets/pf.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={gtc}
          link="https://grave-the-crave.vercel.app/"
          h3="Grave the Crave"
          p="Grave the Crave is a web app that says a lot about the bakery and the items of it."
          github="https://github.com/ALMOSTGOD1999/grave-the-crave"
        />
        <ProjectCard
          src={cosmos}
          link=""
          h3="COSMOS RedSHIFT"
          p="COSMOS RedSHIFT is a physics tutorial app, made with Next.JS and react."
          github="https://github.com/Ade-mir/company-landing-page-2"
        />
        <ProjectCard
          src={m}
          link="https://appwriteblog-kappa-gules.vercel.app/"
          h3="Mesopoptemia"
          p="Mesopotemia is a blog app build on next.js and react, and used appwrite."
          github="https://github.com/ALMOSTGOD1999/MegaBlogAppwrite"
        />
        <ProjectCard
          src={pf}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Portfolio "
          p="Portfolio made with next JS and tailwind CSS."
          github="https://github.com/ALMOSTGOD1999/next-js-portfolio"
        />
      </div>
    </section>
  );
}

export default Projects;
