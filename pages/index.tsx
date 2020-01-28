import React from "react";
import { NextPage } from "next";
import { db } from "../fire";
import Link from "next/link";
import { IGame } from "../interfaces/IGame";
import { IGameDetails } from "../interfaces/IGameDetails";

const Home: NextPage<{ existingGames: IGame[] }> = ({ existingGames }) => {
  const dbRef = db.collection("games");
  const createGame = (name: string) => {
    dbRef
      .add({
        name: name,
        country: "Japan"
      })
      .then(ref => {
        console.log("Added document with ID: ", ref.id);
      });
  };

  return (
    <div>
      {existingGames &&
        existingGames.map(game => {
          return (
            <div key={game.id}>
              {game.id} - {game.details.name}
            </div>
          );
        })}
      <button onClick={() => createGame("my new game")}>Add new game</button>
      <br />
      <br />
      <br />
      <br />
      <Link href="/exampleGame">
        <a>View example game</a>
      </Link>
    </div>
  );
};

Home.getInitialProps = async () => {
  let existingGames: IGame[];
  existingGames = [];
  await db
    .collection("games")
    .get()
    .then(snapshot => {
      if (snapshot.empty) {
        console.log("No matching documents.");
        return;
      }
      snapshot.forEach(doc => {
        existingGames.push({ id: doc.id, details: doc.data() as IGameDetails });
      });
    })
    .catch(err => {
      console.log("Error getting documents", err);
    });
  return { existingGames };
};

export default Home;
