import { FaLinkedin, FaEnvelope } from 'react-icons/fa'; // import the icons
import Nate from '/NateClub.png';
import Jacob from '/JacobClub.png';
import Asvantth from '/AsvantthClub.png';
import Abhi from '/AbhiClub.png';
import Aaron from '/AaronClub.png';
import Jackson from '/JacksonClub.png';

const Leadership = () => {
    return (
        <>
            <div className='mt-32'></div>
            <div className='text-center py-4'>
                <h2 className='text-4xl font-light text-isu_red'>Leadership</h2>
            </div>
            <div className='flex flex-wrap justify-center gap-8 mb-6'>
                {members.map((member, index) => (
                    <div
                        key={index}
                        className='flex flex-col items-center bg-isu_light p-6 rounded-lg shadow-lg w-full max-w-xs md:max-w-sm lg:max-w-md'
                    >
                        <img 
                            src={member.image} 
                            alt={`${member.name}'s profile`} 
                            className='w-48 h-48 object-cover rounded-md mb-4' 
                        />
                        <div className='text-center'>
                            <h3 className='text-xl font-semibold text-gray-800 mb-2'>{member.name}</h3>
                            <p className='text-gray-700 mb-1'>{member.position}</p>
                            <p className='text-gray-700 mb-1'>Grade: {member.grade}</p>
                            <p className='text-gray-700 mb-1'>Major: {member.major}</p>
                            <div className='flex justify-center gap-4 mt-4'>
                                {member.linkedin && (
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="hover:text-isu_gold transition duration-300" size={24} />
                                    </a>
                                )}
                                {member.email && (
                                    <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer">
                                        <FaEnvelope className="hover:text-isu_gold transition duration-300" size={24} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

const members = [
    {
        name: "Aaron Trelstad",
        position: "President",
        grade: "Sophomore",
        major: "Computer Science and Mathematics",
        linkedin: "https://www.linkedin.com/in/aarontrelstad/",
        email: "aaron.trelstad@example.com",
        image: Aaron
    },
    {
        name: "Jacob Mumey",
        position: "Treasurer",
        grade: "Sophomore",
        major: "Computer Engineering",
        linkedin: "https://www.linkedin.com/in/jacobmumey/", 
        email: "jacob.mumey@example.com", 
        image: Jacob
    },
    {
        name: "Nathan Goy",
        position: "Trader",
        grade: "Sophomore",
        major: "Mechanical Engineering",
        linkedin: "https://www.linkedin.com/in/nathan-goy-882639292/", 
        email: "nathan.goy@example.com", 
        image: Nate
    },
    {
        name: "Jackson Tagtmeier",
        position: "Software Engineer",
        grade: "Sophomore",
        major: "Computer Science",
        linkedin: "https://www.linkedin.com/in/jackson-tagtmeier/", 
        email: "jackson.tagtmeier@example.com", 
        image: Jackson
    },
    {
        name: "Asvantth Paranidharan",
        position: "Software Engineer",
        grade: "Sophomore",
        major: "Computer Science",
        linkedin: "https://www.linkedin.com/in/asvantthparanidharan/", 
        email: "asvantth.paranidharan@example.com", 
        image: Asvantth
    },
    {
        name: "Abhinav Pillai",
        position: "Data Scientist",
        grade: "Sophomore",
        major: "Computer Science",
        linkedin: "https://www.linkedin.com/in/apillai08/", 
        email: "abhinav.pillai@example.com", 
        image: Abhi
    },
];

export default Leadership;
