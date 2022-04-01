import { Navbar } from "../components/Navbar";
import projectList from "../libs/projects_data.js";
import DisplayProjects from "../components/DisplayCard";
import PagesHeader from "../components/Header";
import Card from "../components/Card";

export default function Projects() {
  return (
    <>
      <Navbar></Navbar>
      <PagesHeader title={"Projects"}></PagesHeader>

      <div className="card-container">
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
              <Card
                imageSrc={imageSrc}
                title={title}
                type={type}
                technology={technology}
                githubLink={gitHubLink}
                link={link}
              ></Card>
            </div>
          );
        })}
      </div>
    </>
  );
}
