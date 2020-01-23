import React, { FunctionComponent } from "react";
import Card, { CardProps } from "./Card";

type CardRowProps = {
  cards: CardProps[];
};

const CardRow: FunctionComponent<CardRowProps> = ({ cards }) => {
  const IndividulCards = cards.map(card => <Card cardID={card.cardID} />);
  return <div>{IndividulCards}</div>;
};

export default Card;
