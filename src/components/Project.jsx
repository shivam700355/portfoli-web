import { useState } from "react";
import { motion } from "framer-motion";
import { CiLink } from "react-icons/ci";

// Web App Images
import Daylogsweb from "../assets/daylogsweb.png";
import Daylogsweb1 from "../assets/daylogsweb1.png";
import Daylogsweb2 from "../assets/daylogsweb2.png";
import Daylogsweb3 from "../assets/daylogsweb3.png";
import Daylogsweb4 from "../assets/daylogsweb4.png";

// Mobile App Images
import Daylogsmobile1 from "../assets/daylogsmobile1.jpg";
import Daylogsmobile2 from "../assets/daylogsmobile2.jpg";
import Daylogsmobile3 from "../assets/daylogsmobile3.jpg";
import Daylogsmobile4 from "../assets/daylogsmobile4.jpg";
import Daylogsmobile5 from "../assets/daylogsmobile5.jpg";
import Daylogsmobile6 from "../assets/daylogsmobile6.jpg";
import Daylogsmobile7 from "../assets/daylogsmobile7.jpg";

// Dashboard Images
import dashboard1 from "../assets/upidashboard.png";
import dashboard2 from "../assets/upicondashboard.png";
import dashboard3 from "../assets/upicondashboard1.png";
import dashboard4 from "../assets/upicondashboard2.png";

// Music App Images
import musice1 from "../assets/musice1.jpg";
import musice2 from "../assets/musice2.jpg";
import musice3 from "../assets/musice3.jpg";
import musice4 from "../assets/musice4.jpg";

// App
import multitask1 from "../assets/multitask1.jpg";
import multitask2 from "../assets/multitask2.jpg";
import multitask3 from "../assets/multitask3.jpg";
import multitask4 from "../assets/multitask4.jpg";
const projects = [
  {
    id: 1,
    name: "Music Application",
    description:
      "Create a music mobile app using React Native Expo with a sleek UI. Implement components like a player, song list, album art, play/pause buttons, volume control, and track navigation.",
    images: [musice4, musice3, musice1, musice2],
    technologies: ["React Native Expo", "CSS", "JavaScript"],
    github: "https://github.com/shivam700355/Music-App-",
    live: "#",
  },
  {
    id: 2,
    name: "Daylogs Web Application",
    description:
      "A web-based platform designed to manage and record daily logs, built using PHP, MySQL, and modern web technologies.",
    images: [Daylogsweb, Daylogsweb1, Daylogsweb2, Daylogsweb3, Daylogsweb4],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "MySQL",
      "jQuery",
    ],
    github: "https://github.com/shivam700355/Daylogs-HRMS",
    live: "#",
  },
  {
    id: 3,
    name: "CRM Dashboard",
    description:
      "Create a Laravel CRM dashboard with role-wise access and authentication for Admin, SPOC, Vertical Head, Team, and User roles.",
    images: [dashboard2, dashboard1, dashboard4, dashboard3],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Laravel",
      "MySQL",
    ],
    github: "https://github.com/shivam700355/CRM_Dashboard",
    live: "https://crud-three-lovat.vercel.app/",
  },
  {
    id: 4,
    name: "Daylogs Mobile Application",
    description:
      "A mobile application for tracking daily activities and logs, developed using React Native Expo and RESTful APIs.",
    images: [
      Daylogsmobile1,
      Daylogsmobile2,
      Daylogsmobile3,
      Daylogsmobile4,
      Daylogsmobile5,
      Daylogsmobile6,
      Daylogsmobile7,
    ],
    technologies: ["React Native Expo", "RESTful API"],
    github:
      "https://play.google.com/store/search?q=daylogs&c=apps&hl=en_IN",
    live: "#",
  },
  {
    id: 7,
    name: "ToDo, Calculator, Text Util Mobile Application",
    description:
      "A feature-rich mobile app that includes a to-do list, calculator, and text utilities, designed with React Native CLI and SQLite.",
    images: [multitask1,multitask2,multitask3,multitask4],
    technologies: ["React Native CLI", "SQLite Database"],
    github: "https://github.com/shivam700355/MultiTask",
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
            {project.images ? (
              <div className="flex overflow-x-auto space-x-4">
                {project.images.map((image, i) => (
                  <img
                    key={i}
                    src={image}
                    alt={project.name}
                    className="w-48 h-48 object-cover rounded-md"
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
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
              {project.technologies.map((tech, i) => (
                <li
                  key={i}
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
