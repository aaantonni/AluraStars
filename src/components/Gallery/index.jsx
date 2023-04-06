import React, { useState } from "react";
import Tags from "../Tags";
import styles from './Gallery.module.scss'
import pictures from './pictures.json'
import Cards from "./Cards";

export default function Gallery() {
  const [itens, setItens] = useState(pictures);
  const tags = [...new Set(pictures.map((picture) => picture.tag))]

  const photoFilter = (tag) => {
    const newPhotos = pictures.filter((picture) => {
      return picture.tag === tag;
    })

    setItens(newPhotos);
  }

  return (
    <section className={styles.gallery}>
      <h2>Navegue pela galeria:</h2>
      <Tags tags={tags} photoFilter={photoFilter} setItens={setItens}/>
      <Cards item={itens} style={styles}/>
    </section>
  );
}
