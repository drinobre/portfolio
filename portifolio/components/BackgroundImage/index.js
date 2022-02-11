import Image from "next/image";

export default function BackgroundImage(src, layout) {
  return (
    <header ClassName="header">
      <Image src={src} layout={layout}></Image>
    </header>
  );
}
