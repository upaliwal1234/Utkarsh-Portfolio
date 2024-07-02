import moviemania from '../assets/images/moviemania.jpeg';
import agrismart from '../assets/images/agrismart.png';
import ecommerce from '../assets/images/ecommerce.png';
import recipe from '../assets/images/recipe.png';
import { FaGithub } from 'react-icons/fa';

function Projects() {

    const projects = [
        {
            id: 1,
            name: 'Moviemania',
            image: moviemania,
            description: 'A comprehensive movie ticket booking platform developed using the MERN stack. Leveraging React, Express, and MongoDB, this platform offers seamless movie ticket booking functionalities with an admin dashboard for the cinemaowners for managing movie shows.',
            technologies: ['#React', 'Express', '#Node.js', '#MongoDB', '#Tailwind'],
            githubLink: 'https://github.com/upaliwal1234/MovieMania',
        },
        {
            id: 2,
            name: 'Agri Smart',
            image: agrismart,
            description: "Crafted a dynamic website for assessing the soil quality and predicting the best suitable crop. It also has a community forum for the farmers where they can become a part of the farming community.",
            technologies: ['#React', 'Express', '#Node.js', '#MongoDB', '#Tailwind'],
            githubLink: 'https://github.com/upaliwal1234/Agri-Smart',
        },
        {
            id: 3,
            name: 'E-Commerce App',
            image: ecommerce,
            description: 'Developed an E-Commerce website using NodeJS, Express, EJS and Bootstrap. It provides the user with functionalities add, delete and update a product, showcasing the implementation of CRUD operations.',
            technologies: ['Express', '#Node.js', '#MongoDB', '#Bootstrap'],
            githubLink: 'https://github.com/upaliwal1234/E-Commerce',
        },
        {
            id: 4,
            name: 'Recipe App',
            image: recipe,
            description: 'Created a single page recipe web application using HTML, CSS and Javascript. It fetches the recipe data from API on the basis of provided search queries like recipe name or ingredients.',
            technologies: ['#HTML', '#Javascript', '#Bootstrap'],
            githubLink: 'https://github.com/upaliwal1234/Recipe-Website',
        },

    ];


    return (
        <div id="projects" className="w-full bg-black text-white px-4 py-6 sm:px-10 sm:py-8 md:px-32 md:py-20">
            <div className="max-w-[900px]">
                <h1 className="text-4xl sm:text-6xl text-gray-400">PROJECTS</h1>
                <p className="font-sans text-lg sm:text-xl text-gray-100">Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>
            </div>
            <div className="mt-14 font-sans overflow-x-auto w-full scroll-smooth no-scrollbar no-scrollbar::-webkit-scrollbar">
                <div className='inline-flex justify-between items-center gap-10 flex-nowrap mb-8'>
                    {projects && projects.map((project) => (
                        <div key={project.id} className="border border-gray-200 rounded-lg w-[350px] h-[440px] sm:w-[530px] sm:h-[490px]">
                            <div className='relative overflow-hidden group'>
                                <img src={project.image} alt={project.image} className='rounded-lg object-cover' />
                                <div className='rounded-lg absolute h-full w-full bg-black/80 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                        <FaGithub fill="white" className="w-20 h-20" />
                                    </a>
                                </div>
                            </div>
                            <div className='p-4'>
                                <h1 className="text-2xl mb-4 font-bold">{project.name}</h1>
                                <p className="text-gray-200 text-sm font-extralight text-justify">{project.description}</p>
                                <div className="flex flex-wrap flex-row gap-2 justify-center">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className={`tag tag-${index}`}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects