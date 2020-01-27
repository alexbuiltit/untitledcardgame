import CardRow from "../components/CardRow";

const CardContent = [
  {
    key: "12345",
    cardID: "12345",
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
    cardID: "15342",
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
    cardID: "12121",
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
      <CardRow cards={CardContent} />
    </div>
  );
};

export default ExampleGame;
