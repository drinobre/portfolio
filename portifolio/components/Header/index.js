import Image from "next/image";

export default function PagesHeader({ title, image, alt, text }) {
  return (
    <>
      <header className="container-header">
        <div className="wave">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </header>
    </>
  );
}
