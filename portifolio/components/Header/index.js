export default function PagesHeader({ title, image, alt, text }) {
  return (
    <>
      <div className="container-header">
        <div className="header-item">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
