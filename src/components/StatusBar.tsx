import { FC, useContext } from "react";
import { GameContext } from "../contexts/GameContext";

const StatusBar: FC = () => {
  const { currentMove } = useContext(GameContext);

  return (
    <div className="text-2xl mb-3">
      <h1>Tic-Tac-Toe!</h1>
      <h2>
        {currentMove === 0
          ? "Start the game by pressing any buttons!"
          : currentMove === 1
          ? "Player X, your turn!"
          : "Player O, your turn!"}
      </h2>
    </div>
  );
};

export default StatusBar;
