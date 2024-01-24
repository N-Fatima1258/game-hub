
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
const GameGrid = () => {
   const {games, error} = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} padding='10px' spacing={10}>
        {games.map((game) => (
         <GameCard key={game.id} game={game}/>
        ))}
      </SimpleGrid >
    </>
  );
};

export default GameGrid;
/* 
the properties in response that comes with axios 
type res. (and the properties will appear)
*/
// res.data ======> so we can read the body of the response


/*
We can move the logic for making http request inside a service.
The other option is to move the entire logic inside a hook. So hooks are not necessarily for sharing functionality across components. We can also use them to separate concern and make our code more modular and reusable. (custom hooks are inside the hooks folder)


> Our component shoulg=d primarily responsible for returning some markup
>  game={game}   ===> pass games as a props

 columns={{sm:1, md:2, lg:3, xl:5}} > on small devices, 1 col 
 on medium devices, 2 columns and so on
*/