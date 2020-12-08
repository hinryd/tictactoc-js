import { FC, useContext, useEffect } from "react";
import { GameContext, GameTypes } from "../contexts/GameContext";
import Button from "./Button";

const Board: FC = ({ children }) => {
  const { boardState, setBoardState, setCurrentMove, rules } = useContext(
    GameContext
  );

  useEffect(() => {
    rules.forEach((rule) => {
      const condition =
        boardState[rule[0]] + boardState[rule[1]] + boardState[rule[2]];
      if (condition === 3) {
        alert("X win");
        setCurrentMove(0);
        setBoardState(boardState.fill(0));
      } else if (condition === -3) {
        alert("O win");
        setCurrentMove(0);
        setBoardState(boardState.fill(0));
      }
    });

    if (!boardState.includes(0)) {
      alert("Tie!");
      setCurrentMove(0);
      setBoardState(boardState.fill(0));
    }
  }, [boardState]);

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
        {boardState.map((buttonState, index) => {
          return <Button key={index} state={buttonState} index={index} />;
        })}
      </div>
    </>
  );
};

export default Board;
