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
    <div className="project-results">
      <div className="container-project">
        <h2>{title}</h2>
        <div className="project-group">
          <div className="project-group-image">
            <h1>Hello</h1>
          </div>
          <div className="project-group-text">
            <h3>{type}</h3>
            <p>{fullDescription}</p>
            <p>{technology}</p>
            <p>{gitHubLink}</p>
            <p>{link}</p>
          </div>
        </div>
        <div>
          <h3>Tagging: {title}</h3>
        </div>
      </div>
    </div>
  );
}
