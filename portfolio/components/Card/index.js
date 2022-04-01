import Button from "../Button";

export default function Card({ imageSrc, title, type, technology }) {
  return (
    <div>
      <section className="single-card">
        <div className="card-title">
          <h2>{title}</h2>
        </div>
        <div className="card-image">
          <img src={imageSrc} alt="Adriana Nobre Lawrence Avatar" />
        </div>
        <div className="card-description">
          <p className="subheader-gray">{type}</p>
          <p>{technology}</p>
        </div>
        <div>
          <button>Visit site</button>
          <button>Read more</button>
        </div>
      </section>
    </div>
  );
}

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
