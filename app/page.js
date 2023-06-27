"use client";
import Image from "next/image";
import styles from "./page.module.css";
import DrawerAppBar from "./AppBar";
import AboutCard from "./AboutCard";
import Info from "./Info";
import StickyFooter from "./Footer";
import Album from "./Album";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}></div>
      <DrawerAppBar />
      <div id="about" />
      <AboutCard />

      <Info />

      <Album />

      <StickyFooter />
    </main>
  );
}
