import { useState } from "react";
import { motion } from "framer-motion";
import todoImage from "../assets/react.svg";
import Daylogsweb from "../assets/Daylogsweb.png";
import Daylogsmob from "../assets/Daylogsmob.jpg";
import nodetodo from "../assets/nodetodo.png";
import todocalutil from "../assets/todocalutil.png";
import Video from "../assets/multitask.mp4"; // Corrected variable name
import { CiLink } from "react-icons/ci";
const projects = [
  {
    id: 1,
    name: "Daylogs Mobile Application",
    description:
      "A mobile application for tracking daily activities and logs, developed using React Native Expo and RESTful APIs.",
    image: Daylogsmob,
    technologies: ["React Native Expo", "RESTful API"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    name: "Daylogs Web Application",
    description:
      "A web-based platform designed to manage and record daily logs, using PHP, MySQL, and modern web technologies.",
    image: Daylogsweb,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "MySQL",
      "jQuery",
    ],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    name: "ToDoList App",
    description:
      "A simple and efficient to-do list application built with React and Bootstrap for managing daily tasks.",
    image: nodetodo,
    technologies: ["Node", "Express", "EJS", "Bootstrap", "JavaScript"],
    github: "https://github.com/shivam700355/CRUD_Using_node_js",
    live: "https://crud-three-lovat.vercel.app/",
  },
  {
    id: 4,
    name: "ToDo, Calculator, Text Util App",
    description:
      "A versatile app combining a to-do list, calculator, and text utility features, built with React and Bootstrap for a seamless user experience.",
    image: todocalutil,
    technologies: ["React", "JavaScript"],
    github: "https://github.com/shivam700355/Todo-list",
    live: "https://todo-list-mauve-phi.vercel.app/",
  },
  {
    id: 5,
    name: "ToDo, Calculator, Text Util Mobile Application",
    description:
      "A feature-rich mobile app that includes a to-do list, calculator, and text utilities, designed with React Native CLI and SQLite for smooth and efficient performance.",
    video: Video, // Corrected property name
    technologies: ["React Native CLI", "SQLite Database"],
    github: "https://github.com/shivam700355/MultiTaskt",
    live: "#",
  },
];

export const Project = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="my-10 px-5" id="Projects">
      <h1 className="text-center font-bold text-3xl text-gray-800 my-3">
        🚀 Project
      </h1>
      <hr />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {projects.map((project, index) => (
          <motion.li
            key={project.id}
            className="bg-white shadow-lg rounded-lg p-5 hover:scale-105 transition-all ease-in cursor-pointer"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-md"
                onClick={() => setSelectedImage(project.image)}
              />
            ) : project.video ? (
              <video controls className="w-full h-48 object-cover rounded-md">
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : null}
            <h2 className="text-xl font-bold py-3 text-blue-950">
              <a
                target="_blank"
                href={project?.live || "#"}
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <CiLink /> {project?.name || "Project Name"}
              </a>
            </h2>
            <p className="text-gray-700 text-sm">{project.description}</p>
            <ul className="flex flex-wrap items-center my-4 gap-2">
              {project.technologies.map((tech, index) => (
                <li
                  key={index}
                  className="py-1 px-3 shadow-md rounded-md bg-gray-100 text-xs"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 px-4 rounded-lg bg-blue-800 text-white text-center font-medium"
            >
              Source Code
            </a>
          </motion.li>
        ))}
      </ul>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <button
              className="absolute top-3 right-3 text-white text-2xl bg-gray-800 rounded-full px-3 py-1"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Full Screen"
              className="max-w-full max-h-screen rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};
