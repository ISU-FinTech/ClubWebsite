import { FaGithub } from "react-icons/fa";

const Projects = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className='mt-32'>
                <h4 className="text-4xl font-light text-center text-isu_red mb-4">Projects</h4>
            </div>
            <div className='wrapper flex flex-col items-center'>
                {projects.map((item, index) => (
                    <div 
                        key={index}
                        className='rounded-lg shadow-md p-6 mb-6 max-w-4xl w-full bg-isu_light'
                    >
                        <div className='flex items-center justify-between mb-2'>
                            <h3 className='py-2 px-4 rounded-lg text-2xl font-semibold'>
                                {item.title}
                            </h3>
                            {item.link && (
                                <a 
                                    href={item.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub className="hover:text-isu_gold transition duration-300" size={24} />
                                </a>
                            )}
                        </div>
                        <p 
                            className={`font-semibold ${
                                item.status === 'In Progress' ? 'text-isu_yellow' : 'text-isu_green'
                            }`}
                        >
                            {item.status}
                        </p>
                        <p className='text-gray-700 mb-3'>{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {item.techStack.map((tech, i) => (
                                <span 
                                    key={i}
                                    className="bg-isu_red text-isu_white px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const projects = [
    {
        title: 'Trading Competition Platform',
        status: "In Progress",
        description: 'Building a cloud-based trading competition platform where users engage in real-time simulated trading using live market data. The platform will feature leaderboards, ranking systems, and performance analysis tools to track competitors, ensuring scalability and resilience for large-scale competitions. Competitors will be be able to activly trade within their own personal trading environment.',
        link: "https://github.com/",
        techStack: ["Rust", "TypeScript", "React", "Docker", "AWS"]
    },
    {
        title: "Lesson Planning",
        status: "In Progress",
        description: 'Developing an educational curriculum tailored for quantitative finance. Topics cover foundational and advanced areas in Mathematics, Statistics, Machine Learning, and essential programming skills in C++ and Python. The curriculum is designed for interactive, project-based learning with a focus on practical applications in quantitative analysis. We will also cover how to analyze financial reports and economic data to make educated decisions on stocks.',
        link: "https://github.com/",
        techStack: ["C++", "Python"]
    },
    {
        title: 'Club Website',
        status: "Review",
        description: 'Creating a centralized platform for club members to access resources, event information, and internal announcements. The website supports a user-friendly interface with easy navigation, allowing members to engage with club activities and materials.',
        link: "https://github.com/ISU-FinTech/ClubWebsite",
        techStack: ["TypeScript", "React", "TailwindCSS"]
    },
];

export default Projects;


