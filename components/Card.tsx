import React, { FunctionComponent } from "react";

type CardCost = {
  green?: number;
  blue?: number;
  red?: number;
  black?: number;
  white?: number;
};

type CardProps = {
  cardID: string;
  colour?: string;
  value?: number;
  cost?: CardCost;
};

const Card: FunctionComponent<CardProps> = ({ cardID }) => (
  <div>
    <h2>{cardID}</h2>
  </div>
);

export default Card;
