import { Navbar } from "../components/Navbar";
import projectList from "../libs/projects_data.js";
import DisplayProjects from "../components/DisplayCard";
import PagesHeader from "../components/Header";

export default function Projects() {
  return (
    <>
      <Navbar></Navbar>
      <PagesHeader
        title={"Projects"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        }
      ></PagesHeader>

      <div>
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
            <div key={id}>
              <DisplayProjects
                // key={id}
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
