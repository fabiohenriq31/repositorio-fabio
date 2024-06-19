// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaReact, FaJsSquare, FaHtml5, FaCss3, FaPython, FaNode } from 'react-icons/fa';
import { SiSass, SiTypescript, SiFastify, SiSqlite, SiZod, SiEslint, SiMongodb } from 'react-icons/si';
import { IoLogoFirebase } from "react-icons/io5";
import '../styles/components/projectscontainer.sass';


const ProjectsContainer = () => {
  return (
    <div>
      <h2>Projetos</h2>
      <div className="list-container">
      <div className="list-item">
          <div className="item-left">
            <a href="https://github.com/fabiohenriq31/espaco-aprender-front-end" target="_blank"><span>Projeto Espaço Aprender (Front-End)</span></a>
          </div>
          <div className="item-right">
            <span className='react-icon' data-name="React"><FaReact /></span>
            <span className='css-icon' data-name="Css"><FaCss3 /></span>                     
          </div>
        </div>
      <div className="list-item">
          <div className="item-left">
            <a href="https://github.com/fabiohenriq31/espaco-aprender-back-end" target="_blank"><span>Projeto Espaço Aprender (Back-End)</span></a>
          </div>
          <div className="item-right">
            <span className='node-icon'><FaNode /></span>
            <span className='js-icon'><FaJsSquare /></span>
            <span className='mongo-icon'><SiMongodb /></span> 
            <span className='fire-icon'><IoLogoFirebase /></span>                    
          </div>
        </div>
        <div className="list-item">
          <div className="item-left">
            <a href="https://github.com/fabiohenriq31/repositorio-fabio" target="_blank"><span>API REST com Node</span></a>
          </div>
          <div className="item-right">
            <span className='node-icon'><FaNode /></span>
            <span className='ts-icon'><SiTypescript /></span>
            <span className='fast-icon'><SiFastify /></span>
            <span className='sql-icon'><SiSqlite /></span>
            <span className='zod-icon'><SiZod /></span>
            <span className='eslint-icon'><SiEslint /></span>
          </div>
        </div>
        <div className="list-item">
          <div className="item-left">
            <a href="https://github.com/fabiohenriq31/repositorio-fabio" target="_blank"><span>importando csv Node</span></a>
          </div>
          <div className="item-right">
            <span className='node-icon'><FaNode /></span>
            <span className='js-icon'><FaJsSquare /></span>
          </div>
        </div>
        <div className="list-item">
          <div className="item-left">
            <a href="https://github.com/fabiohenriq31/repositorio-fabio" target="_blank"><span>Este Portfolio</span></a>
          </div>
          <div className="item-right">
            <span className='react-icon'><FaReact /></span>
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