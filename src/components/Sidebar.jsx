/* eslint-disable no-unused-vars */
import "../styles/components/sidebar.sass";
import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer"

import Avatar from "../img/Fabio.jpg";

const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Fabio Henrique" />
        <p className="title">Desenvolvedor Full Stack</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="https://drive.google.com/drive/folders/1SOcWvy6NflM44d5LirhW4iOgaX3HZeAM?usp=sharing" className="btn" target="_blank">Download Currículo</a>

    </aside>       
    
}

export default Sidebar