import "../styles/components/maincontent.sass";
import AboutContainer from "../components/AboutContainer";
import TechnologiesContainer from "../components/TechnologiesContainer"
import ProjectsContainer from "../components/ProjectsContainer"

const MainContent = () => {
    return <main id="main-content">
        <AboutContainer />
        <TechnologiesContainer />
        <ProjectsContainer />
        </main>
}

export default MainContent