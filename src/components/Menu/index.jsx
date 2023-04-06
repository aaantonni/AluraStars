import React from "react";
import icons from "./Icons/icons.json";
import styles from "./Menu.module.scss";
import Icon from "./Icons/index";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {icons.map((icon) => (
          <Icon key={icon.id} icone={icon} style={styles} />
        ))}
      </ul>
    </nav>
  );
}
