import { useContext } from "react";
import { GameContext, GameTypes } from "../contexts/GameContext";

const Button = ({ state, index }) => {
  const { currentMove, setBoardState, setCurrentMove } = useContext(
    GameContext
  );

  return (
    <button
      className="border bg-gray-300 text-8xl h-36 w-full rounded-xl shadow-xl"
      onClick={() => {
        currentMove === 0
          ? setCurrentMove(1)
          : setCurrentMove(currentMove * -1);
        setBoardState((prevBoardState) => {
          let arr = [...prevBoardState];
          arr[index] = currentMove;
          return arr;
        });
      }}
      disabled={state === 0 ? false : true}
    >
      {state === 0 ? "" : state === 1 ? "X" : state === -1 ? "O" : null}
    </button>
  );
};

export default Button;
