import Image from "next/image";

export default function BackgroundImage(src, alt, layout) {
  return (
    <header className="header">
      <Image src={src} alt={alt} layout={layout}></Image>
    </header>
  );
}
