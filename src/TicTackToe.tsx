import { useState } from "react";
import "./App.css";
// import { Button } from "./components/ui/button";

const Square = ({
  item,
  index,
  setState,
  state,
  winner,
  player,
  setPlayer,
  setWinner,
  currentPlayer,
  setCurrentPlayer,
}: {
  item: number;
  winner: string;
  index: number;
  state: state;
  player: Record<{ string: { values: Array<string> } }>;
  setState: () => void;
  setWinner: () => void;
  currentPlayer: string;
  setPlayer: () => void;
  setCurrentPlayer: () => void;
}) => {
  const isGameOver = (player) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const element in player) {
      console.log(player[element]["values"]);
      const playerMoves = player[element]["values"];
      if (playerMoves.length >= 3) {
        for (let index = 0; index < lines.length; index++) {
          const isVerified = lines[index].every((elm) =>
            playerMoves.includes(elm)
          );
          if (isVerified) return true;
        }
      }
    }
    return false;
  };
  const clickHandler = (boxItemIndex: number) => {
    if (state[boxItemIndex] || winner) {
      return;
    }

    setState((prevState) => {
      return prevState.map((item, index) => {
        if (boxItemIndex == index) {
          return currentPlayer;
        }
        return item;
      });
    });
    setCurrentPlayer((prePlayer) => {
      if (prePlayer == "x") {
        return "o";
      } else {
        return "x";
      }
    });

    player[currentPlayer].values.push(boxItemIndex);
    setPlayer(player);

    if (isGameOver(player)) {
      setWinner(currentPlayer);
      return;
    }
  };

  return (
    <div onClick={() => clickHandler(index)} className="item">
      {item}
    </div>
  );
};

function TicTackToe() {
  const [currentPlayer, setCurrentPlayer] = useState("x");
  const [winner, setWinner] = useState("");
  const [state, setState] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState({
    x: { values: [] },
    o: { values: [] },
  });

  return (
    <>
      <div className="game">
        <h1>Current Player {`${currentPlayer}`}</h1>
        <h2>Winner - {`${winner ? winner : " InProgress"}`}</h2>
        <div className="box">
          {state.map((item, index) => {
            return (
              <Square
                index={index}
                state={state}
                setState={setState}
                winner={winner}
                setWinner={setWinner}
                player={player}
                setPlayer={setPlayer}
                currentPlayer={currentPlayer}
                setCurrentPlayer={setCurrentPlayer}
                key={index}
                item={item}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TicTackToe;
