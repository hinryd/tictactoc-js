import { FC, useContext } from "react";
import { GameContext } from "../contexts/GameContext";

const StatusBar: FC = () => {
  const { currentMove } = useContext(GameContext);

  return (
    <>
      <h1>Tic-Tac-Toe!</h1>
      <h2>
        {currentMove === 0
          ? "Start the game by pressing the buttons!"
          : currentMove === 1
          ? "Player X, your turn!"
          : "Player O, your turn!"}
      </h2>
    </>
  );
};

export default StatusBar;
