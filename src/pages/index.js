import Head from "next/head";
import Image from "next/image";
import Header from "./components/Header";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>My Bolha</title>
        <meta name="description" content="Minha rede bolha" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id={styles.contend}>
        <Header></Header>
        <div id={styles.frontPage}>
          <h2>Guarde seus arquivos de forma rapida e segura!</h2>
        </div>
      </div>
    </>
  );
}
