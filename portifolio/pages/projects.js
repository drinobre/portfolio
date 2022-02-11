import PagesHeader from "../components/Header";
import { Navbar } from "../components/Navbar";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <Navbar></Navbar>
      <div NameClass="background">
        <Image
          src="/homepage_img.png"
          alt="personal-intro"
          layout="fill"
        ></Image>
      </div>
      <main></main>
    </>
  );
}
