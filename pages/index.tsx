import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Atome from "../component/atoms/atom";
import Layout from "../component/layouts/layout";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <Atome />
      </div>
    </>
  );
}
