export default function PagesHeader({ title, image, alt, text }) {
  return (
    <>
      <header class="container-header">
        <div class="wave">
          <img href={image} alt={alt}></img>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </header>
    </>
  );
}
