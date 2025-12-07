import Card from "./Card";
import PROJECTS from "../data/projects";

const Projects = () => {
  return (
    <div className="flex justify-center p-5">
      <div className="xl:w-[60%]">
        <h1 className="text-4xl font-semibold">Projects</h1>
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-6 mt-5">
         {PROJECTS.map((project,i)=>(
          <Card element={project} key={i}/>
         ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
