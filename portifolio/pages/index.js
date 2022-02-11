import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <Head>
        <title>Hi, I am Adriana</title>
        <meta name="description" content="Adriana Nobre Lawrence portifolio" />
      </Head>

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
