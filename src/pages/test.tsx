import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Test() {

  return (
    <>
      <Head>
        <title>Kontrola mexických jmen</title>
        <meta name="description" content="test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
    test
      </main>
    </>
  );
}
