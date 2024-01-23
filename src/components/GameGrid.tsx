import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

// use ts to represent the shape of the response object
interface Game {
  id: number;
  name: string;
}
interface FetchGameResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  // for storing the game object
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  // to send the fetch request to the backend
  // send the request to the games endpoint
  useEffect(() => {
    apiClient.get<FetchGameResponse>("/games").then((res) => setGames(res.data.results))
    .catch(err => setError(err.message))
  });

  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
    </>
  )
  
};

export default GameGrid;
/* 
the properties in response that comes with axios 
type res. (and the properties will appear)
*/
// res.data ======> so we can read the body of the response