import React, { FunctionComponent } from "react";

type CoinProps = {
  colour: "red" | "blue" | "green" | "red" | "white";
};

const Coin: FunctionComponent<CoinProps> = ({ colour }) => (
  <div>
    <h2>{colour}</h2>
  </div>
);

export default Coin;
