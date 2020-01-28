import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { TResourceColour } from "../types/TResourceColour";

type StyledProps = {
  colour: TResourceColour;
};

const ResourceCardCostItemStyled = styled.div<StyledProps>`
  background: ${p => p.colour};
`;

interface ResouceCardCostItemProps {
  colour: TResourceColour;
  value: number;
}

export const ResourceCardCostItem: FunctionComponent<ResouceCardCostItemProps> = ({
  colour,
  value
}) => (
  <ResourceCardCostItemStyled colour={colour}>
    <span>{value}</span>
  </ResourceCardCostItemStyled>
);
