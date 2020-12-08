import Head from "next/head";
import React, { FC } from "react";
import Board from "../components/Board";
import StatusBar from "../components/StatusBar";
import GameContextProvider from "../contexts/GameContext";

const index: FC = () => {
  return (
    <>
      <Head>
        <title>Tic-tac-toe!</title>
      </Head>

      <main className="text-center max-w-md mx-auto py-auto">
        <GameContextProvider>
          <StatusBar />
          <Board />
        </GameContextProvider>
      </main>
    </>
  );
};

export default index;
