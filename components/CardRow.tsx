import React, { FunctionComponent } from "react";
import Card, { CardProps } from "./Card";
import styled from "styled-components";

const CardRowStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
interface CardRowProps {
  cards: CardProps[];
}

const CardRow: FunctionComponent<CardRowProps> = ({ cards }) => {
  const IndividualCards = cards.map(card => (
    <Card
      key={card.cardID}
      cardID={card.cardID}
      cost={card.cost}
      colour={card.colour}
      value={card.value}
    />
  ));
  return <CardRowStyled>{IndividualCards}</CardRowStyled>;
};

export default CardRow;
