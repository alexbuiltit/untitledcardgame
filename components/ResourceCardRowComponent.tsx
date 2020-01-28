import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { IResourceCard } from "../interfaces/IResourceCard";
import { ResourceCardComponent } from "./ResourceCardComponent";

const ResourceCardRowStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
interface ResourceCardRowProps {
  cards: IResourceCard[];
}

export const ResourceCardRowComponent: FunctionComponent<ResourceCardRowProps> = ({
  cards
}) => {
  const IndividualCards = cards.map(card => (
    <ResourceCardComponent
      key={card.id}
      id={card.id}
      cost={card.cost}
      colour={card.colour}
      value={card.value}
    />
  ));
  return <ResourceCardRowStyled>{IndividualCards}</ResourceCardRowStyled>;
};
