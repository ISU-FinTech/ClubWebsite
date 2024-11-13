import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-isu_red py-8 opacity-90">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-2">Iowa State FinTech Club</h3>
            <p className="text-lg">Dedicated to exploring the intersection of finance and technology through projects, networking, and learning opportunities.</p>
            <p className="text-sm mt-2">© {new Date().getFullYear()} Iowa State FinTech Club. All Rights Reserved.</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h2 className="text-xl font-medium mb-2">Connect With Us</h2>
            <div className="flex space-x-4 text-2xl">
              <a
                href="https://www.linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-isu_gold transition duration-300"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="mailto:your-email@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-isu_gold transition duration-300"
              >
                <BiLogoGmail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

