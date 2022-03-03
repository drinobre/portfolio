import Image from "next/image";

export default function DisplayProjects({
  title,
  imageSrc,
  alt,
  fullDescription,
  technology,
  type,
  gitHubLink,
  link,
}) {
  return (
    <section className="section-group">
      <div className="project-results1">
        <div className="container-project"></div>
        <div className="project-group1">
          <div className="project-group-image">
            <Image
              src={imageSrc}
              alt="Adriana Nobre Lawrence Avatar"
              width="10"
              height="8"
              layout="responsive"
            />
            <h4 className="subheader-gray">{type}</h4>
          </div>
          <div className="project-group-text">
            <div>
              <h2>{title}</h2>
              <h3 className="subheader-gray">{technology}</h3>
            </div>
            <p className="title">{fullDescription}</p>
            <br></br>
            <div>
              <a href={link}>See project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
