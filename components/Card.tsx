import React, { FunctionComponent } from "react";
import styled from "styled-components";
import CardCostItem from "../components/CardCostItem";

const CardStyled = styled.div`
  border-radius: 8px;
  margin: 16px;
  padding: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
const CostStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
type CardCost = {
  green?: number;
  blue?: number;
  red?: number;
  black?: number;
  white?: number;
};

export interface CardProps {
  key: string;
  cardID: string;
  colour?: string;
  value?: number;
  cost: CardCost;
}

const Card: FunctionComponent<CardProps> = ({
  cardID,
  colour,
  value,
  cost
}) => (
  <CardStyled>
    <p>{colour && colour}</p>
    <p>Value: {value}</p>
    <CostStyled>
      {cost.green !== undefined && cost.green > 0 && (
        <CardCostItem colour="green" value={cost.green} />
      )}
      {cost.blue !== undefined && cost.blue > 0 && (
        <CardCostItem colour="blue" value={cost.blue} />
      )}
      {cost.red !== undefined && cost.red > 0 && (
        <CardCostItem colour="red" value={cost.red} />
      )}
      {cost.black !== undefined && cost.black > 0 && (
        <CardCostItem colour="black" value={cost.black} />
      )}
      {cost.white !== undefined && cost.white > 0 && (
        <CardCostItem colour="white" value={cost.white} />
      )}
    </CostStyled>
  </CardStyled>
);

export default Card;
