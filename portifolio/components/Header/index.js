export default function PagesHeader({ title, subheader, image, alt, text }) {
  return (
    <>
      <div className="container-header">
        <div className="header-item">
          <h1 className="mainTitle">{title}</h1>
          <h3>{subheader}</h3>
          <p className="main-paragraph">{text}</p>
        </div>
      </div>
    </>
  );
}
