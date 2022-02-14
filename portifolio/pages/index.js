import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components/Navbar";
import Image from "next/image";
import PagesHeader from "../components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <Head>
        <title>Hi, I am Adriana</title>
        <meta name="description" content="Adriana Nobre Lawrence portifolio" />
      </Head>
      {/* <div>
        <div className="image-container">
          {" "}
          <Image
            src="/homepage_img_v5.png"
            alt="portifolio"
            layout="fill"
            className={"image"}
          ></Image>
          <button>Find out more</button>
        </div>
      </div> */}
      <PagesHeader
        title={"Welcome to my portifolio"}
        text={
          "Welcome to my portifolioWelcome to my portifolioWelcome to my portifolioWelcome to my portifolioWelcome to my portifolioWelcome to my portifolioWelcome to my portifolioWelcome to my portifolioWelcome to my portifolioWelcome to my portifolioWelcome to my portifolioWelcome to my portifolioWelcome to my portifolioWelcome to my portifolioWelcome to my portifolioWelcome to my portifolio"
        }
      ></PagesHeader>
      <div className="background_Homepage">
        <h1>Hi</h1>
        <p>
          Hello my name is Adriana Hello my name is Adriana Hello my name is
          Adriana Hello my name is Adriana Hello my name is Adriana Hello my
          name is Adriana Hello my name is Adriana Hello my name is Adriana
          Hello my name is Adriana Hello my name is Adriana Hello my name is
          Adriana
        </p>
      </div>

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
