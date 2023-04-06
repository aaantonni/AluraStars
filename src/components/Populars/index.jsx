import React from 'react'
import styles from './Populars.module.scss'
import popularPictures from './popular-pictures.json'
import Button from 'components/Button'

export default function Populars(children) {
  return (
    <aside className={styles.populars}>
        <h2>Populares</h2>
        <ul className={styles.populars__images}>
            {popularPictures.map((populaPicture) => {
                return (
                    <li key={populaPicture.id}>
                        <img src={populaPicture.path} alt={populaPicture.alt} />
                    </li>
                )
            })}
        </ul>
        <Button children={children}> Ver mais fotos </Button>
    </aside>
  )
}
