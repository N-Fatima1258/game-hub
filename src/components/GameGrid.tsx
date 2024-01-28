import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);

  // we donot need a state variable here becz it is not going to change over time.
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />{" "}
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
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
