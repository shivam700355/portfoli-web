import { About } from "./About";
import { Education } from "./Education";
import { RecentWork } from "./RecentWork";
import { TechSkills } from "./TechSkills";

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
        <TechSkills />
      </div>
      <div id="projects">
        <RecentWork />
      </div>
    </>
  );
};
