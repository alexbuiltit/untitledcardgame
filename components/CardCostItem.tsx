import React, { FunctionComponent } from "react";
import styled from "styled-components";

type StyledProps = {
  colour: string;
};

const CostItemStyled = styled.div<StyledProps>`
  background: ${p => p.colour};
`;

export interface CostItemProps {
  colour: string;
  value: number;
}

const CardCostItem: FunctionComponent<CostItemProps> = ({ colour, value }) => (
  <CostItemStyled colour={colour}>
    <span>{value}</span>
  </CostItemStyled>
);

export default CardCostItem;
