export default function PagesHeader({ title, image, alt, text }) {
  return (
    <>
      <div className="container-header">
        <div className="header-item">
          <h1 className="mainTitle">{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
