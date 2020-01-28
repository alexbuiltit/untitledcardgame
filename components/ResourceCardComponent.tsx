import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ResourceCardCostItem } from "./ResourceCardCostItem";
import { IResourceCard } from "../interfaces/IResourceCard";

const ResourceCardStyled = styled.div`
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

export const ResourceCardComponent: FunctionComponent<IResourceCard> = ({
  id,
  colour,
  value,
  cost
}) => (
  <ResourceCardStyled>
    <p>{colour && colour}</p>
    <p>Value: {value}</p>
    <CostStyled>
      {cost.green !== undefined && cost.green > 0 && (
        <ResourceCardCostItem colour="green" value={cost.green} />
      )}
      {cost.blue !== undefined && cost.blue > 0 && (
        <ResourceCardCostItem colour="blue" value={cost.blue} />
      )}
      {cost.red !== undefined && cost.red > 0 && (
        <ResourceCardCostItem colour="red" value={cost.red} />
      )}
      {cost.black !== undefined && cost.black > 0 && (
        <ResourceCardCostItem colour="black" value={cost.black} />
      )}
      {cost.white !== undefined && cost.white > 0 && (
        <ResourceCardCostItem colour="white" value={cost.white} />
      )}
    </CostStyled>
  </ResourceCardStyled>
);
