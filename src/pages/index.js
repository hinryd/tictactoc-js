import Head from "next/head";
import { useEffect, useState } from "react";

const index = () => {
  const [playing, setPlaying] = useState(false);
  const [gameState, setGameState] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [playerTurn, setPlayerTurn] = useState(1); // 1 is X, -1 is O

  useEffect(() => {
    const rules = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    rules.forEach((rule) => {
      const condition =
        gameState[rule[0]] + gameState[rule[1]] + gameState[rule[2]];
      if (condition === 3) {
        alert("X win");
        setPlaying(false);
        setGameState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
      } else if (condition === -3) {
        alert("O win");
        setPlaying(false);
        setGameState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
      }
    });

    if (playing === true && !gameState.includes(0)) {
      alert("Tie!");
      setPlaying(false);
      setGameState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
  }, [gameState]);

  const Button = ({ state, ind }) => {
    return (
      <button
        className="border border-gray-100 text-xl h-32 w-32 rounded-xl shadow-xl"
        onClick={() => {
          setGameState((prevState) => {
            let arr = [...prevState];
            arr[ind] = playerTurn;
            return arr;
          });
          setPlayerTurn(playerTurn * -1);
          setPlaying(true);
        }}
        disabled={state === 0 ? false : true}
      >
        {state === 0 ? "" : state === 1 ? "X" : state === -1 ? "O" : null}
      </button>
    );
  };

  const Grid = ({ children }) => {
    return <div className="grid grid-cols-3 grid-rows-3 gap-2">{children}</div>;
  };

  return (
    <>
      <Head>
        <title>Tic-tac-toe!</title>
      </Head>

      <main className="text-center max-w-md mx-auto py-auto">
        <h1>We are now {playing}</h1>
        <Grid>
          {gameState.map((block, ind) => {
            return <Button state={block} ind={ind} />;
          })}
        </Grid>
      </main>
    </>
  );
};

export default index;
