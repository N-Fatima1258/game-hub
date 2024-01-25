import useData from "./useData";

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
const useGames = () => useData<Game>('/games')

export default useGames;

// exoport games and error objects so we can use them in our component

// without array of dependencies in the effectHook, we cannot send a request to our backend
// network tab > for the working of canceled request