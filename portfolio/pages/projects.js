import { Navbar } from "../components/Navbar";
import projectList from "../libs/projects_data.js";
import DisplayProjects from "../components/DisplayCard";
import PagesHeader from "../components/Header";

export default function Projects() {
  return (
    <>
      <Navbar></Navbar>
      <PagesHeader title={"Projects"}></PagesHeader>

      <div>
        {projectList.map(function ({
          id,
          imageSrc,
          title,
          fullDescription,
          technology,
          type,
          gitHubLink,
          link,
        }) {
          return (
            <div key={id}>
              <DisplayProjects
                imageSrc={imageSrc}
                title={title}
                type={type}
                fullDescription={fullDescription}
                technology={technology}
                githubLink={gitHubLink}
                link={link}
              ></DisplayProjects>
            </div>
          );
        })}
      </div>
    </>
  );
}
