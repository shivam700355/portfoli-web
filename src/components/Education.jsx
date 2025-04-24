import { motion } from "framer-motion";
import { MdCastForEducation } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";

export const Education = () => {
  const education = [
    {
      id: 1,
      name: "Master of Computer Application",
      university: "Shri Ramswaroop Memorial University (SRMU)",
      year: "2022-2024",
      duration: "2022-2024",
      specialization: "Software Development & Database Management",
    },
    {
      id: 2,
      name: "Bachelor of Science in Computer Science",
      university: "Kamla Nehru Institute of Physical & Social Sciences, (Sultanpur)",
      year: "2019-2022",
      duration: "2019-2022",
      specialization: "Algorithms, Data Structures & Web Technologies",
    },
  ];

  const experience = [
    {
      id: 1,
      role: "Software Engineer",
      company: "Varion Advisors Analytics",
      year: "2024 - Present",
      duration: "1.4 Year",
      description:
        "Working with PHP, Laravel, React, React Native, Bootstrap, Tailwind, JavaScript (jQuery), and Bootstrap.",
    },
    {
      id: 2,
      role: "Software Trainee / Intern",
      company: "Varion Advisors Analytics Pvt. Ltd.",
      year: "2023 - 2024",
      duration: "3 Months",
      description: "Developed web applications and dashboards using Laravel and Bootstrap.",
    },
  ];

  return (
    <div className="my-10" id="EducationExperience">
      <div className="w-11/12 md:w-2/3 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Education Section */}
          <div className="w-full">
            <h1 className="my-3 text-3xl font-bold text-center text-gray-700 flex items-center justify-center gap-2">
              <MdCastForEducation className="text-4xl text-gray-700" />
              Qualifications
            </h1>
            <hr className="w-full mb-6 border-gray-300" />
            <div className="relative w-full">
              <div className="absolute -left-2 top-10 h-full w-[2px] bg-gray-500"></div>
              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="relative bg-white p-5 shadow-md rounded-lg mb-6 w-full"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute w-[12px] h-[12px] rounded-full top-8 bg-gray-500 -left-2 hover:bg-amber-600 transition-all"></div>
                  <button className="py-1 px-5 text-lg bg-gray-400 border-0 rounded-xl font-medium text-white hover:bg-amber-600 transition-transform">
                    {item.year}
                  </button>
                  <h2 className="my-2 text-xl font-bold text-start text-gray-700 flex items-center">
                    <span className="mr-2 text-amber-600">•</span> {item.name}
                  </h2>
                  <p className="py-1 text-gray-600">
                    <strong>University:</strong> {item.university}
                  </p>
                  <p className="py-1 text-gray-600">
                    <strong>Duration:</strong> {item.duration}
                  </p>
                  <p className="py-1 text-gray-600">
                    <strong>Specialization:</strong> {item.specialization}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="w-full">
            <h1 className="my-3 text-3xl font-bold text-center text-gray-700 flex items-center justify-center gap-2">
              <FaBriefcase className="text-4xl text-gray-700" />
              Experience
            </h1>
            <hr className="w-full mb-6 border-gray-300" />
            <div className="relative w-full">
              <div className="absolute -left-2 top-10 h-full w-[2px] bg-gray-500"></div>
              {experience.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="relative bg-white p-5 shadow-md rounded-lg mb-6 w-full"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute w-[12px] h-[12px] rounded-full top-8 bg-gray-500 -left-2 hover:bg-amber-600 transition-all"></div>
                  <button className="py-1 px-5 text-lg bg-gray-400 border-0 rounded-xl font-medium text-white hover:bg-amber-600 transition-transform">
                    {item.year}
                  </button>
                  <h2 className="my-2 text-xl font-bold text-start text-gray-700 flex items-center">
                    <span className="mr-2 text-amber-600">•</span> {item.role}
                  </h2>
                  <p className="py-1 text-gray-600">
                    <strong>Company:</strong> {item.company}
                  </p>
                  <p className="py-1 text-gray-600">
                    <strong>Duration:</strong> {item.duration}
                  </p>
                  <p className="py-1 text-gray-600">
                    <strong>Description:</strong> {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
