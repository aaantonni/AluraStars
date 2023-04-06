import styles from "./InicialPage.module.scss";

import Banner from "components/Banner";
import Footer from "components/Footer";
import Gallery from "components/Gallery";
import Header from "components/Header";
import Menu from "components/Menu";
import Populars from "components/Populars";

export default function InicialPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.principal}>
          <Menu />
          <Banner />
        </section>
        <div className={styles.gallery}>
          <Gallery />
          <Populars />
        </div>
      </main>
      <Footer />
    </>
  );
}
