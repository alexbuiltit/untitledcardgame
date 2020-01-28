import { ResourceCardRowComponent } from "../components/ResourceCardRowComponent";
import { IResourceCard } from "../interfaces/IResourceCard";

const CardContent: IResourceCard[] = [
  {
    key: "12345",
    id: "12345",
    colour: "blue",
    value: 2,
    cost: {
      green: 0,
      blue: 4,
      red: 0,
      black: 0,
      white: 2
    }
  },
  {
    key: "12345",
    id: "15342",
    colour: "blue",
    value: 2,
    cost: {
      green: 3,
      blue: 3,
      red: 0,
      black: 0,
      white: 0
    }
  },
  {
    key: "12121",
    id: "12121",
    colour: "blue",
    value: 2,
    cost: {
      green: 3,
      blue: 0,
      red: 0,
      black: 2,
      white: 2
    }
  }
];

const ExampleGame = () => {
  return (
    <div>
      <h1>Testing gameplay</h1>
      <ResourceCardRowComponent cards={CardContent} />
    </div>
  );
};

export default ExampleGame;
