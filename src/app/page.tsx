import Image from "next/image";
import styles from "./page.module.css";

import { Fleur_De_Leah, MedievalSharp } from "next/font/google";

const fleur = Fleur_De_Leah({ subsets: ["latin"], weight: "400" });
const medieval = MedievalSharp({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className={styles.main}>
      <title>Eanar Music</title>
      <div className={styles.container}>
        <Image
          src="/images/banner.png"
          alt="EAMusic banner"
          className={styles.banner}
          priority
          fill
        />
        <div className={styles.content}>
          <div className={styles.titleContainer}>
            <h1 className={fleur.className}>Eanar</h1>
            <h2 className={medieval.className}>MUSIC</h2>
          </div>
          <div className={styles.owl}>
            <Image src="/images/owl.png" alt="Owl image" priority fill />
          </div>
          <div className={styles.linkContainer}>
            <a
              className={styles.link}
              href="https://www.instagram.com/eanarmusic"
              target="_blank"
            >
              <Image
                src="/images/icons/instagram.svg"
                alt="Instagram link"
                width={50}
                height={50}
              />
            </a>
            <a
              className={styles.link}
              href="https://www.youtube.com/@Eanarmusic"
              target="_blank"
            >
              <Image
                src="/images/icons/youtube.svg"
                alt="Youtube link"
                width={50}
                height={50}
              />
            </a>
            <a
              className={styles.link}
              href="https://www.tiktok.com/@eanarmusic"
              target="_blank"
            >
              <Image
                src="/images/icons/tiktok.svg"
                alt="TikTok link"
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
