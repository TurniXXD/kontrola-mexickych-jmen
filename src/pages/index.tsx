import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { Name, names } from "@/names";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [resultState, setResultState] = useState<"correct" | "wrong" | null>(null)
  const [name, setName] = useState("")
  const [foundName, setFoundName] = useState<Name | null>(null)

  return (
    <>
      <Head>
        <title>Kontrola mexických jmen</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <form className={styles.form} onSubmit={(e) => {
          e.preventDefault();

          const foundName = names.find((n) => n.mexican.toLowerCase() === name.toLowerCase())
          if (foundName) {
            setResultState("correct")
            setFoundName(foundName)
            return;
          }

          setResultState("wrong")
        }}>
          <div className={styles.inputWrapper}>
            <label htmlFor="name">Zadej mexické jméno pro kontrolu:</label>
            <input type="text" id="name" name="name" className={styles.name} onChange={(e) => setName(e.target.value)} />
          </div>

          <button type="submit" className={styles.btn}>Ověřit</button>

          {resultState === "correct" && foundName && (
            <div>

              <Image className={styles.resultImg} src="/correct.jpg" alt="correct" />
              <h2>Správně</h2>

              Jméno pro {foundName.original} je {foundName.mexican}
            </div>
          )}
          {resultState === "wrong" && (
            <div>
              <Image className={styles.resultImg} src="/wrong.png" alt="wrong" />

              <h2>Špatně :(</h2>
            </div>
          )}
        </form>
      </main>
    </>
  );
}
