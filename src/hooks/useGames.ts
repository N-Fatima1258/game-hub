import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

// use ts to represent the shape of the response object
export interface Platform{
    id: number,
    name: string;
    slug: string;
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    // parent_platforms is not a Platform array. Its an array of objects where each object has a property called platform of type Platform
    parent_platforms: {platform : Platform} []
  }
  interface FetchGameResponse {
    count: number;
    results: Game[];
  }



const useGames = () => {
// for storing the game object
const [games, setGames] = useState<Game[]>([]);
const [error, setError] = useState("");

// to send the fetch request to the backend
// send the request to the games endpoint
useEffect(() => {
    // create a acontroller object and set it to the instance of abort constroller
    const controller = new AbortController();
  apiClient
    .get<FetchGameResponse>("/games", {signal : controller.signal})
    .then((res) => setGames(res.data.results))
    .catch((err) => {
        if(err instanceof CanceledError) return;        
        setError(err.message)});

    // cleanup function
    return () => controller.abort();
}, []);

return { games, error}
}

export default useGames;

// exoport games and error objects so we can use them in our component

// without array of dependencies in the effectHook, we cannot send a request to our backend
// network tab > for the working of canceled request