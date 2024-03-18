// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaReact, FaJsSquare, FaHtml5, FaCss3, FaPython } from 'react-icons/fa';
import { SiSass } from 'react-icons/si';
import '../styles/components/projectscontainer.sass';


const ProjectsContainer = () => {
  return (
    <div>
      <h2>Projetos</h2>
    <div className="list-container">
    <div className="list-item">
        <div className="item-left">
        <a href="https://github.com/fabiohenriq31/portfolio" target="_blank"><span>Este Portfolio</span></a>
        </div>
        <div className="item-right">
          <span className='sass-icon'><SiSass /></span>
          <span className='js-icon'><FaJsSquare /></span>
        </div>
      </div>
      <div className="list-item">
        <div className="item-left">
        <a href="https://github.com/fabiohenriq31/expert-Notes" target="_blank"><span>Expert-Notes</span></a>
        </div>
        <div className="item-right">
          <span className='react-icon'><FaReact /></span>
          <span className='js-icon'><FaJsSquare /></span>
        </div>
      </div>
      <div className="list-item">
        <div className="item-left">
        <a href="https://github.com/fabiohenriq31/Curso-Full-Stack" target="_blank"><span>Curso-Full-Stack</span></a>
        </div>
        <div className="item-right">
          <span className='js-icon'><FaJsSquare /></span>
        </div>
      </div>
      <div className="list-item">
        <div className="item-left">
        <a href="https://github.com/fabiohenriq31/Projeto5Rocketseat" target="_blank"><span>Projeto5Rocketseat</span></a>
        </div>
        <div className="item-right">
          <span className='html-icon'><FaHtml5 /></span>
          <span className='css-icon'><FaCss3 /></span>
        </div>
      </div>
      <div className="list-item">
        <div className="item-left">
        <a href="https://github.com/fabiohenriq31/Projeto-rocketseat3" target="_blank"><span>Projeto-rocketseat3</span></a>
        </div>
        <div className="item-right">
          <span className='html-icon'><FaHtml5 /></span>
          <span className='css-icon'><FaCss3 /></span>
        </div>
      </div>
      <div className="list-item">
        <div className="item-left">
        <a href="https://github.com/fabiohenriq31/Desafio-Flutuar-Figma" target="_blank"><span>Desafio-Flutuar-Figma</span></a>
        </div>
        <div className="item-right">
          <span className='html-icon'><FaHtml5 /></span>
          <span className='css-icon'><FaCss3 /></span>
        </div>
      </div>
      <div className="list-item">
        <div className="item-left">
        <a href="https://github.com/fabiohenriq31/CorrigindoBugs-Rocketseat" target="_blank"><span>CorrigindoBugs-Rocketseat</span></a>
        </div>
        <div className="item-right">
          <span className='html-icon'><FaHtml5 /></span>
          <span className='css-icon'><FaCss3 /></span>
        </div>
      </div>
      <div className="list-item">
        <div className="item-left">
        <a href="https://github.com/fabiohenriq31/projeto2Rocketseat" target="_blank"><span>projeto2Rocketseat</span></a>
        </div>
        <div className="item-right">
          <span className='html-icon'><FaHtml5 /></span>
          <span className='css-icon'><FaCss3 /></span>
        </div>
      </div>
      <div className="list-item">
        <div className="item-left">
        <a href="https://github.com/fabiohenriq31/projetoPortfolio" target="_blank"><span>projetoPortfolio</span></a>
        </div>
        <div className="item-right">
          <span className='js-icon'><FaJsSquare /></span>
          <span className='html-icon'><FaHtml5 /></span>
          <span className='css-icon'><FaCss3 /></span>
        </div>
      </div>
      <div className="list-item">
        <div className="item-left">
        <a href="https://github.com/fabiohenriq31/cursoemvideo" target="_blank"><span>cursoemvideo</span></a>
        </div>
        <div className="item-right">
          <span className='py-icon'><FaPython /></span>
        </div>
      </div>
    </div>
  </div>  
  );
};

export default ProjectsContainer;