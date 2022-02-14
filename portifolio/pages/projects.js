import PagesHeader from "../components/Header";
import { Navbar } from "../components/Navbar";
import Image from "next/image";
import projectList from "../libs/projects_data.js";
import DisplayProjects from "../components/DisplayCard";

export default function Projects() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        {projectList.map(function ({
          image,
          title,
          description,
          fullDescription,
          technology,
          type,
          creationDate,
          gitHubLink,
          link,
        }) {
          return (
            <div>
              <div>
                <DisplayProjects
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
