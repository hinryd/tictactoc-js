import { createContext, FC, useState } from "react";

export const GameContext = createContext(undefined);

export type GameTypes = 0 | 1 | -1;

const GameContextProvider: FC = ({ children }) => {
  const [boardState, setBoardState] = useState<GameTypes[]>([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ]);
  const [currentMove, setCurrentMove] = useState<GameTypes>(0);
  const rules: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return (
    <GameContext.Provider
      value={{ boardState, currentMove, setBoardState, setCurrentMove, rules }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
