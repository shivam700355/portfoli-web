import { FaJs, FaNodeJs, FaHtml5, FaCss3Alt, FaReact, FaPhp, FaLaravel } from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress, SiJquery } from "react-icons/si";
import { motion } from "framer-motion";

export const Skill = () => {
  const skillsData = [
    { id: 1, name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
    { id: 2, name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
    { id: 3, name: "JavaScript", icon: <FaJs className="text-yellow-500 text-2xl" /> },
    { id: 4, name: "jQuery", icon: <SiJquery className="text-blue-400 text-2xl" /> },
    { id: 5, name: "PHP", icon: <FaPhp className="text-purple-500 text-2xl" /> },
    { id: 6, name: "Laravel", icon: <FaLaravel className="text-red-500 text-2xl" /> },
    { id: 7, name: "React", icon: <FaReact className="text-blue-500 text-2xl" /> },
    { id: 8, name: "React Native", icon: <FaReact className="text-blue-500 text-2xl" /> },
    { id: 9, name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" /> },
    { id: 10, name: "Express", icon: <SiExpress className="text-gray-400 text-2xl" /> },
    { id: 11, name: "MongoDB", icon: <SiMongodb className="text-green-500 text-2xl" /> },
    { id: 12, name: "MySQL", icon: <SiMysql className="text-blue-600 text-2xl" /> },
  ];

  return (
    <div className="my-2" id="Skills">
      <div className="w-11/12 md:w-2/3 mx-auto">
        <h1 className="text-center font-bold text-4xl mb-5">🚀 Tech Skills</h1>
        <hr />
        <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
          {skillsData.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex flex-col items-center p-5 border rounded-lg shadow-md"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.icon}
              <p className="mt-2 font-semibold">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
