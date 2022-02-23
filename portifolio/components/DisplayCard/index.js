import Image from "next/image";

export default function DisplayProjects({
  title,
  // description,
  fullDescription,
  technology,
  type,
  // creationDate,
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
              src="/images/personal_avatar.png"
              alt="Adriana Nobre Lawrence Avatar"
              width="8"
              height="8"
              layout="responsive"
            />
            <h4 className="subheader-gray">{type}</h4>
          </div>
          <div className="project-group-text">
            <h2>{title}</h2>
            <h3 className="subheader-gray">{technology}</h3>
            <p>{fullDescription}</p>
            {/* <h4>Challenges:</h4> */}
            {/* <p>Access the full project: {gitHubLink}</p> */}
            <a href={link}>See project</a>
          </div>
        </div>
      </div>
    </section>
  );
}
