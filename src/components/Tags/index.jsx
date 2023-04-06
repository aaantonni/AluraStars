import React from "react";
import styles from "./Tags.module.scss";
import pictures from "../Gallery/pictures.json";

export default function Tags({ tags, photoFilter, setItens }) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__list}>
        {tags.map((tag) => {
          return (
            <li key={tag} onClick={() => photoFilter(tag)}>
              {tag}
            </li>
          );
        })}
        <li onClick={() => setItens(pictures)}>Todas</li>
      </ul>
    </div>
  );
}
