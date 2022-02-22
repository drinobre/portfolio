import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components/Navbar";
import PagesHeader from "../components/Header";
import HeroHomePage from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <Head>
        <title>Hi, I am Adriana</title>
        <meta name="description" content="Adriana Nobre Lawrence portifolio" />
      </Head>
      <PagesHeader
        title={"Hello, I'm Adriana Nobre Lawrence"}
        subheader={"< Mum, Entrepreneur, Full Stack Developer >"}
        // text={
        //   "Starting a new career in Tech can be very challenging and I've taken the hardest step of leaving a promising career as a Business Analyst | Project Manager to become a Full Stack Developer. The rest of the story will depend on who is willing to help me grow? I hope you enjoy learning more about me and see a bit more about what I have done so far ..."
        // }
        // text={
        //   "Starting a new career in Tech can be very challenging and I've taken the hardest step of leaving a promising career as a Business Analyst | Project Manager to become a Full Stack Developer."
        // }
      ></PagesHeader>

      <HeroHomePage></HeroHomePage>

      <Footer></Footer>
    </div>
  );
}
