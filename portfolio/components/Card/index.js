import Button from "../Button";

export default function Card({
  imageSrc,
  title,
  type,
  technology,
  link,
  gitHubLink,
}) {
  return (
    <div>
      <section className="single-card">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-image">
          <img src={imageSrc} alt="Adriana Nobre Lawrence Avatar" />
        </div>
        <div className="card-description">
          <p className="subheader-gray">{type}</p>
          <p>{technology}</p>
        </div>
        <div className="card-buttons">
          <a href={link} className="button-small">
            Visit here
          </a>
          <a href={gitHubLink} className="button-small">
            Read more
          </a>
        </div>
      </section>
    </div>
  );
}

// <Button className={"button-small"} title={"Visit here"} />
// <Button className={"button-small"} title={"Read more"} />

{
  /* <div>
<Image
  src="/thumbnails/bootcamper_app_team.png"
  alt="Adriana Nobre Lawrence Avatar"
  width="10"
  height="7"
  layout="responsive"
/>
</div> */
}
