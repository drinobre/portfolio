import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <Head>
        <title>Hi, I'm Adriana</title>
        <meta name="description" content="Adriana Nobre Lawrence portifolio" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>

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
