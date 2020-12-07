import Head from "next/head";
import { useEffect, useState } from "react";

const index = () => {
  const [playing, setPlaying] = useState(false);
  const [gameState, setGameState] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [turn, setTurn] = useState(1);

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
    if (!gameState.includes(0) && playing === true) {
      alert("Tie!");
      setPlaying(false);
      setGameState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
  });

  function Button({ state, ind }) {
    const arr = [...gameState];
    arr[ind] = turn;

    return (
      <button
        className="text-xl"
        onClick={() => {
          setGameState(arr);
          setTurn(turn * -1);
          setPlaying(true);
        }}
      >
        {state === 0 ? "." : state === 1 ? "X" : state === -1 ? "O" : null}
      </button>
    );
  }

  return (
    <>
      <Head>
        <title>Tic-tac-toe!</title>
      </Head>

      <main>
        <h1>{playing}</h1>
        <div className="grid grid-cols-3 grid-rows-3 grid-flow-col gap-2 max-w-md">
          {gameState.map((block, ind) => {
            return <Button state={block} ind={ind} />;
          })}
        </div>
      </main>
    </>
  );
};

export default index;
