import { FaInstagramSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer className="bg-gray-950 text-white py-6">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-6">
          {/* Branding */}
          <div className="text-center sm:text-left">
            <h3 className="text-green-500 font-bold text-3xl py-2">
              Shivam Maurya
            </h3>
            <p>🚀 Full Stack Developer | MERN Stack</p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-yellow-600 font-bold text-xl py-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="/" className="hover:text-blue-400">Home</a></li>
              <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
              <li><a href="#about" className="hover:text-blue-400">About</a></li>
              <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
              <li><a href="#education" className="hover:text-blue-400">Education</a></li>
              <li>
                <a
                  href="mailto:smshivam700751@gmail.com?subject=Contact&body=Hello"
                  className="hover:text-blue-400"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-yellow-600 font-bold text-xl py-2">Follow Me</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" target="_blank">
                <FaLinkedin className="text-2xl text-blue-400 hover:text-blue-600" />
              </a>
              <a href="" target="_blank">
                <FaInstagramSquare className="text-2xl text-pink-500 hover:text-pink-600" />
              </a>
              <a href="#" target="_blank">
                <FaGithubSquare className="text-2xl text-gray-400 hover:text-gray-600" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
