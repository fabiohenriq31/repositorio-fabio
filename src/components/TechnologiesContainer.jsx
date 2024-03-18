import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
  } from "react-icons/di";
  
  import "../styles/components/technologiescontainer.sass";
  
  const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, level: "Avançado" },
    { id: "css", name: "CSS3", icon: <DiCss3 />, level: "Avançado" },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, level: "Intermediário" },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, level: "Intermediário"  },
    { id: "mysql", name: "MySQL", icon: <DiMysql />, level: "Intermediário" },
    { id: "react", name: "React", icon: <DiReact />, level: "Intermediário" },
  ];
   
  const TechnologiesContainer = () => {
    return (
      
      <section className="technologies-container">
       <h2>Tecnologias</h2>
        <div className="technologies-grid">
          {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
                <p>{tech.level}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TechnologiesContainer;