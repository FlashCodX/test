import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const fetchData = async () => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_VERCEL_URL + "/api/hello"
    );
    const json = await response.json();
    console.log(json);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button onClick={() => fetchData()}>CLICK ME</button>
    </div>
  );
}
