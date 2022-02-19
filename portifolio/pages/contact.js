import { Navbar } from "../components/Navbar";
import PagesHeader from "../components/Header";

export default function Contact() {
  return (
    <>
      <Navbar></Navbar>
      <PagesHeader
        title={"Contact me"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        }
      ></PagesHeader>
      <p>Contact</p>
    </>
  );
}
