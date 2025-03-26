import profilePic from "../assets/shivam_maurya.jpg";
import { FaFacebook, FaGithub, FaReact, FaBootstrap, FaNodeJs, FaPhp } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { PiLinktreeLogoFill } from "react-icons/pi";
import { SiMongodb, SiExpress, SiMysql, SiTailwindcss, SiLaravel, SiJavascript, SiCss3, SiHtml5 } from "react-icons/si";
import { motion } from "framer-motion";
import React from "react";

const socialMedia = [
  {
    id: 1,
    icon: <FaFacebook className="text-white text-3xl hover:text-blue-500" />,
    url: "https://www.facebook.com/profile.php?id=100069961540707",
  },
  {
    id: 2,
    icon: <BsLinkedin className="text-white text-3xl hover:text-blue-500" />,
    url: "https://www.linkedin.com/in/shivam-maurya-176500217/",
  },
  {
    id: 3,
    icon: <FaGithub className="text-white text-3xl hover:text-blue-300" />,
    url: "https://github.com/shivam700355",
  },
  {
    id: 4,
    icon: <PiLinktreeLogoFill className="text-white text-4xl hover:text-pink-700" />,
    url: "https://linktr.ee/shivam9565",
  },
];

const skills = [
  
  { id: 6, name: "React", icon: <FaReact className="text-blue-500 text-2xl" /> },
  { id: 7, name: "React Native", icon: <FaReact className="text-blue-500 text-2xl" /> },
  { id: 8, name: "MongoDB", icon: <SiMongodb className="text-green-500 text-2xl" /> },
  { id: 9, name: "MySQL", icon: <SiMysql className="text-blue-600 text-2xl" /> },
  { id: 10, name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" /> },
  { id: 11, name: "Express", icon: <SiExpress className="text-gray-400 text-2xl" /> },

];

export const About = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto" id="About">
      <motion.div
        className="flex items-center justify-center mx-auto hover:scale-110"
        initial={{ opacity: 0, x: -10, y: -10 }}
        animate={{ opacity: 1, x: 10, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <img src={profilePic} alt="profile picture" className="w-50 h-50 rounded-full" />
      </motion.div>

      <motion.div
        className="py-2 text-center"
        initial={{ opacity: 0, x: -10, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h1 className="font-bold text-4xl sm:text-xl text-green-600">👋 Hi, I'm Shivam Maurya</h1>
        <h2 className="text-white font-medium sm:text-xl py-2">🔍 Software Engineer at Varion Advisors Analytics.</h2>
        <h2 className="text-yellow-600 sm:text-2xl font-semibold">🌍 Full Stack Web & App Development</h2>
      </motion.div>

      <motion.div className="flex items-center justify-center gap-2">
        {socialMedia.map((item) => (
          <motion.a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 30, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9 }}
            className="hover:scale-110"
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>

      <div className="text-white flex flex-wrap items-center justify-center gap-2 my-3">
        {skills.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center gap-2 bg-gray-950 py-3 px-5 shadow-md shadow-green-300 rounded-2xl hover:scale-110"
          >
            {item.icon}
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
