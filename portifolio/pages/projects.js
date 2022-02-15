import { Navbar } from "../components/Navbar";
import projectList from "../libs/projects_data.js";
import DisplayProjects from "../components/DisplayCard";

export default function Projects() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        {projectList.map(function ({
          id,
          title,
          fullDescription,
          technology,
          type,
          gitHubLink,
          link,
        }) {
          return (
            <div>
              <div>
                <DisplayProjects
                  key={id}
                  title={title}
                  type={type}
                  fullDescription={fullDescription}
                  technology={technology}
                  githubLink={gitHubLink}
                  link={link}
                ></DisplayProjects>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}
