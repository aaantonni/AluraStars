import React from "react";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icons}>
        <a
          href="https://www.facebook.com/AluraCursosOnline/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="Ícone do facebook" />
        </a>
        <a
          href="https://twitter.com/aluraonline?lang=en"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="Ícone do twitter" />
        </a>
        <a
          href="https://www.instagram.com/aluraonline/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="Ícone do instagram" />
        </a>
      </div>
      <p>Desenvolvido por Antonio Grangeiro em curso da Alura.</p>
    </footer>
  );
}