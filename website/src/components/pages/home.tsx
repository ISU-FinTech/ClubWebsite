import ISU from "/iowaStateImage.jpg";
import { FaAnglesDown } from "react-icons/fa6";

function Home() {
  return (
    <div>
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${ISU})` }}
      >
        <div className="absolute inset-0 bg-isu_white opacity-70"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h5 className="text-isu_black text-3xl sm:text-5xl font-extrabold">
              Iowa State FinTech Club
            </h5>
          </div>
        </div>

        <div className="absolute bottom-8 w-full flex justify-center">
          <FaAnglesDown className="text-3xl text-gray-600 animate-bounce" />
        </div>
      </div>

      <div className="bg-isu_white text-center py-12 px-4">
        <h1 className="text-3xl md:text-5xl font-light text-gray-700">
          Join the Growing Demand in{" "}
          <span className="text-isu_red">FinTech</span>
        </h1>
        <p className="text-gray-700 mt-4 mx-auto max-w-4xl">
          The demand for skilled professionals in the{" "}
          <span className="text-isu_red">finance</span> and{" "}
          <span className="text-isu_red">software</span> sectors has
          skyrocketed in recent years, with job opportunities growing at an
          unprecedented rate. As companies continue to innovate and expand their digital offerings,
          this is the perfect time to get involved in these industries and shape
          the future of finance and technology.
        </p>
      </div>

      <div className="bg-isu_light text-center py-12 px-4">
        <h1 className="text-blue-600 text-3xl md:text-5xl font-light">
          What We Do
        </h1>
        <p className="text-gray-700 mt-4 mx-auto max-w-4xl">
          At{" "}
          <span className="font-bold text-isu_red">
            Iowa State's FinTech Club
          </span>
          , we are dedicated to connecting passionate individuals with the
          rapidly growing fields of finance and technology. Our club provides a
          platform for hands-on experience, learning industry strategies, and
          collaborating on exciting projects. Through meetings, projects, and
          competitions, we empower our members with the skills and
          connections needed to thrive in these high-demand industries. Join us
          to explore{" "}
          <span className="font-bold text-blue-600">
            real-world software projects
          </span>
          {" "} and {" "}
          <span className="font-bold text-blue-600">
            investment theory
          </span>
          , helping you to be a part of the next wave of tech innovation.
        </p>
      </div>

      <div className="bg-isu_ghost text-center py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-light text-blue-600">
          Ready to Shape the Future of Tech and Fintech?
        </h2>
        <p className="text-gray-700 mt-4 mx-auto max-w-4xl">
          If you're passionate about technology, innovation or finance, we want you! {" "}
          <span className="font-bold text-blue-600">Apply today</span> to become
          a member and start making an impact. If you have any questions or need
          more information, don't hesitate to{" "}
          <span className="font-bold text-blue-600">reach out</span> to us.
          We're here to help you succeed and take the next step in your
          professional journey!
        </p>
      </div>
    </div>
  );
}

export default Home;
