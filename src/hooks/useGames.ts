import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

// use ts to represent the shape of the response object
export interface Platform{
    id: number;
    name: string;
    slug: string;
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    // parent_platforms is not a Platform array. Its an array of objects where each object has a property called platform of type Platform
    parent_platforms: {platform : Platform} [];
    metacritic: number; 

  }
const useGames = (gameQuery: GameQuery) => useData<Game>('/games', {
  params:   {
    genres: gameQuery.genre?.id,
   platforms: gameQuery.platform?.id,
   ordering: gameQuery.sortOrder
  }},
  [gameQuery]) // anytime this object changes, we need to refetch the data

export default useGames;

// exoport games and error objects so we can use them in our component

// without array of dependencies in the effectHook, we cannot send a request to our backend
// network tab > for the working of canceled request

// params: one of the properties of axios request config object
// genres: selectedGenre?.id} => if selectedGenre is null , genre would also be null
// {params: {genres: selectedGenre?.id}}   => pass the selected genre as a query string parameter to the data hook
// [selectedGenre?.id]==> any of the dependencies changes, our effect (useGames) will re run and re fetch the data from the server