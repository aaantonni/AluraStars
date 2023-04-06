import React from "react";
import Card from "./Card";

export default function Cards({ item, style }) {
  return (
    <ul className={style.gallery__cards}>
      {item.map((item) => {
        return <Card key={item.id} item={item} style={style} />;
      })}
    </ul>
  );
}
