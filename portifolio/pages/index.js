import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components/Navbar";
import PagesHeader from "../components/Header";
import HeroHomePage from "../components/Hero";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <Head>
        <title>Hi, I am Adriana</title>
        <meta name="description" content="Adriana Nobre Lawrence portifolio" />
      </Head>
      <PagesHeader
        title={"Welcome to my Portifolio! I'm Adriana"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        }
      ></PagesHeader>

      <HeroHomePage></HeroHomePage>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/adriana-nobre-lawrence/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed and created by{" Adriana Nobre Lawrence"}
        </a>
      </footer>
    </div>
  );
}
