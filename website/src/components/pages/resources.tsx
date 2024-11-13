import { FaGoogleDrive } from "react-icons/fa";

const Resources = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className='mt-32'>
                <h4 className="text-4xl font-light text-center text-isu_red mb-4">Resources</h4>
            </div>
            <div className='wrapper flex flex-col items-center'>
                {data.map((item, index) => (
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
                                    <FaGoogleDrive className="hover:text-isu_gold transition duration-300" size={24} />
                                </a>
                            )}
                        </div>
                        <p>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const data = [
    {
        title: 'Software Principles',
        description: 'Delving into advanced software concepts essential for building high-performance systems. Topics include low-latency system design, memory optimization techniques, efficient data structures, and concurrent data processing. Resources cover practical implementations and theory, with hands-on projects in C++ to help learners master these critical skills for scalable software engineering.',
        link: 'google'
    },
    {
        title: 'Mathematical and Statistical Foundations',
        description: 'Providing in-depth materials on essential topics in mathematics and statistics for data science. This resource explores machine learning models, regression analysis, time-series forecasting, stochastic processes, and financial market theory. Learners will gain proficiency in Python for data analysis, with projects focusing on real-world applications like predictive modeling and statistical inference in finance and economics.',
        link: 'google'
    },
    {
        title: 'Financial Fundamentals',
        description: 'Introducing the key principles and technical terminology of finance. This resource covers financial statement analysis, market metrics, and investment strategies. Learners are guided through reading and interpreting reports, financial ratios, and valuation methods, enabling them to analyze a company’s financial health, understand stock market dynamics, and make informed investment decisions.',
        link: 'google'
    },
];

export default Resources;

