import { About } from "./About";
import { Education } from "./Education";
import { Project } from "./Project";
import { Skill } from "./Skill";

export const Home = () => {
  return (
    <>
      <div id="home" className="py-28 bg-gray-950 -z-30">
        <About />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="skills">
        <Skill />
      </div>
      <div id="projects">
        <Project />
      </div>
    </>
  );
};
