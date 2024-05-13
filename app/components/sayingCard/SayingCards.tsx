"use client";
import React, { FC } from "react";
import sayingCard from "./sayingCard.module.scss";

interface Props {
  data: any[];
}

function sortArray(arr: BookType[]) {
  arr.sort(function (a, b) {
    const textA = a.name.toUpperCase();
    const textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });
}

const SayingCards: FC<Props> = ({ ...props }) => {
  if (!props) {
    return;
  }

  const sayings = props.data;

  return (
    <div className={sayingCard.allCards}>
      <p className={sayingCard.heading}>Top 10 Sayings</p>

      {sayings.map((saying, index) => {
        return <p key={index}>{`${index + 1}. ${saying.saying}`}</p>;
      })}
    </div>
  );
};

export default SayingCards;
