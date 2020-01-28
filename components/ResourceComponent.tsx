import React, { FunctionComponent } from "react";
import { TResourceColour } from "../types/TResourceColour";

interface CoinProps {
  colour: TResourceColour;
}

export const Coin: FunctionComponent<CoinProps> = ({ colour }) => (
  <div>
    <h2>{colour}</h2>
  </div>
);
