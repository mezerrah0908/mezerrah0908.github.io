const projects = [

    {
        title:"Application de Jeu de Cachette",

        description:
        "Jeu développé en C++ avec SFML utilisant la programmation orientée objet et les animations graphiques.",

        technologies:
        "C++, SFML, POO",

        link:""
    },

    {
        title:"Site Web Fitness",

        description:
        "Création d’un site web responsive avec HTML, CSS et JavaScript.",

        technologies:
        "HTML, CSS, JavaScript",

        link:
        "https://mezerrah0908.github.io/FITZONE/"
    }

];


function ProjectCard(props){

    return(

        <div className="project-card">

            <h3>{props.title}</h3>

            <p>{props.description}</p>

            <p>

                <strong>Technologies :</strong>

                {props.technologies}

            </p>


            {
                props.link !== "" &&

                <a href={props.link} target="_blank">

                    Voir le projet

                </a>
            }

        </div>

    );

}


function App(){

    return(

        <div>

            {
                projects.map((project,index)=>(

                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        link={project.link}
                    />

                ))
            }

        </div>

    );

}


const root = ReactDOM.createRoot(document.getElementById('projects'));

root.render(<App />);